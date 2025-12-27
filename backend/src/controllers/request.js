import { MaintenanceActivity } from '../models/maintenanceActivity.model.js';
                                            
export const createMaintenanceActivity = async (req, res) => {
  try {
    const {
      subject,
      status,
      createdBy,
      maintenanceFor,
      equipment,
      category,
      requestDate,
      maintenanceType,
      team,
      technician,
      scheduledDate,
      duration,
      priority,
      company,
      notes,
      instructions
    } = req.body;
    if (!subject || !equipment || !category || !maintenanceType || !team || !technician || !scheduledDate || !company) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    const maintenanceActivity = await MaintenanceActivity.create({
      subject,
      status,
      createdBy,
      maintenanceFor,
      equipment,
      category,
      requestDate,
      maintenanceType,
      team,
      technician,
      scheduledDate,
      duration,
      priority,
      company,
      notes,
      instructions
    });

    res.status(201).json({
      success: true,
      message: 'Maintenance activity created successfully',
      data: maintenanceActivity
    });
  } catch (error) {
    console.error('Error creating maintenance activity:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error creating maintenance activity'
    });
  }
};
export const getAllMaintenanceActivities = async (req, res) => {
  try {
    const {
      status,
      maintenanceType,
      priority,
      category,
      team,
      company,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      order = 'desc'
    } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (maintenanceType) filter.maintenanceType = maintenanceType;
    if (priority) filter.priority = priority;
    if (category) filter.category = category;
    if (team) filter.team = team;
    if (company) filter.company = company;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const sortOrder = order === 'desc' ? -1 : 1;
    const maintenanceActivities = await MaintenanceActivity.find(filter)
      .populate('equipment', 'name serialNumber')
      .populate('team', 'teamName')
      .populate('createdBy.employeeId', 'name email')
      .populate('technician.employeeId', 'name email')
      .populate('maintenanceFor.equipmentId', 'name serialNumber')
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(parseInt(limit));
    const totalCount = await MaintenanceActivity.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: maintenanceActivities,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalCount / parseInt(limit)),
        totalItems: totalCount,
        itemsPerPage: parseInt(limit)
      }
    });
  } catch (error) {
    console.error('Error fetching maintenance activities:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching maintenance activities'
    });
  }
};

export const getMaintenanceActivityById = async (req, res) => {
  try {
    const { id } = req.params;

    const maintenanceActivity = await MaintenanceActivity.findById(id)
      .populate('equipment', 'name serialNumber status')
      .populate('team', 'teamName teamMembers')
      .populate('createdBy.employeeId', 'name email role')
      .populate('technician.employeeId', 'name email role')
      .populate('maintenanceFor.equipmentId', 'name serialNumber status category');

    if (!maintenanceActivity) {
      return res.status(404).json({
        success: false,
        message: 'Maintenance activity not found'
      });
    }

    res.status(200).json({
      success: true,
      data: maintenanceActivity
    });
  } catch (error) {
    console.error('Error fetching maintenance activity:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching maintenance activity'
    });
  }
};

export const updateMaintenanceActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const maintenanceActivity = await MaintenanceActivity.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    );

    if (!maintenanceActivity) {
      return res.status(404).json({
        success: false,
        message: 'Maintenance activity not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Maintenance activity updated successfully',
      data: maintenanceActivity
    });
  } catch (error) {
    console.error('Error updating maintenance activity:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error updating maintenance activity'
    });
  }
};

export const deleteMaintenanceActivity = async (req, res) => {
  try {
    const { id } = req.params;

    const maintenanceActivity = await MaintenanceActivity.findByIdAndDelete(id);

    if (!maintenanceActivity) {
      return res.status(404).json({
        success: false,
        message: 'Maintenance activity not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Maintenance activity deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting maintenance activity:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error deleting maintenance activity'
    });
  }
};
export const getMaintenanceByEquipment = async (req, res) => {
  try {
    const { equipmentId } = req.params;

    const maintenanceActivities = await MaintenanceActivity.find({
      equipment: equipmentId
    })
      .populate('team', 'teamName')
      .populate('technician.employeeId', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: maintenanceActivities,
      count: maintenanceActivities.length
    });
  } catch (error) {
    console.error('Error fetching maintenance activities by equipment:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching maintenance activities'
    });
  }
};
export const getMaintenanceByTechnician = async (req, res) => {
  try {
    const { technicianId } = req.params;

    const maintenanceActivities = await MaintenanceActivity.find({
      'technician.employeeId': technicianId
    })
      .populate('equipment', 'name serialNumber')
      .populate('team', 'teamName')
      .sort({ scheduledDate: -1 });

    res.status(200).json({
      success: true,
      data: maintenanceActivities,
      count: maintenanceActivities.length
    });
  } catch (error) {
    console.error('Error fetching maintenance activities by technician:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching maintenance activities'
    });
  }
};
