import express from 'express';
import {
  createEquipment,
  getAllEquipment,
  getEquipmentById,
  updateEquipment,
  deleteEquipment,
  assignEquipment,
  unassignEquipment,
  scrapEquipment,
  getEquipmentByCategory,
  getAvailableEquipment,
  getEquipmentStatistics
} from '../controllers/equipment.controller.js';
import {
  createMaintenanceActivity,
  getAllMaintenanceActivities,
  getMaintenanceActivityById,
  updateMaintenanceActivity,
  deleteMaintenanceActivity,
  getMaintenanceByEquipment,
  getMaintenanceByTechnician,
  getMaintenanceByStatus,
  getMaintenanceStatistics
} from '../controllers/maintenanceActivity.controller.js';

const router = express.Router();

router.post('/equipment', createEquipment);
router.get('/equipment', getAllEquipment);
router.get('/equipment/:id', getEquipmentById);
router.put('/equipment/:id', updateEquipment);
router.delete('/equipment/:id', deleteEquipment);

router.patch('/equipment/:id/assign', assignEquipment);
router.patch('/equipment/:id/unassign', unassignEquipment);
router.patch('/equipment/:id/scrap', scrapEquipment);

router.get('/equipment/category/:category', getEquipmentByCategory);
router.get('/equipment/available/list', getAvailableEquipment);
router.get('/equipment/stats/summary', getEquipmentStatistics);

router.post('/maintenance', createMaintenanceActivity);
router.get('/maintenance', getAllMaintenanceActivities);
router.get('/maintenance/:id', getMaintenanceActivityById);
router.put('/maintenance/:id', updateMaintenanceActivity);
router.delete('/maintenance/:id', deleteMaintenanceActivity);

router.get('/maintenance/equipment/:equipmentId', getMaintenanceByEquipment);
router.get('/maintenance/technician/:technicianId', getMaintenanceByTechnician);
router.get('/maintenance/status/:status', getMaintenanceByStatus);
router.get('/maintenance/stats/summary', getMaintenanceStatistics);

export default router;
