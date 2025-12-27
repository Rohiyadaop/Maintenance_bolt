import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Equipment name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    equipmentCategory: {
      type: String,
      required: [true, 'Equipment category is required'],
      trim: true
    },
    company: {
      type: String,
      required: [true, 'Company is required'],
      trim: true
    },
    usedBy: {
      type: String,
      default: 'Not Assigned'
    },
    maintenanceTeam: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Team"
    },
    assignedDate: {
      type: Date,
      default: null
    },
    technician: {
      type: String,
      required: [true, 'Technician name is required'],
      trim: true
    },
    employeeName: {
      type: String,
      trim: true,
      default: null
    },
    scrapDate: {
      type: Date,
      default: null
    },
    usedInLocation: {
      type: String,
      trim: true,
      default: null
    },
    workCenter: {
      type: String,
      trim: true,
      default: null
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
      default: ''
    },
    serialNumber: {
      type: String,
      trim: true,
      unique: true,
      sparse: true
    },
    status: {
      type: String,
      enum: ['Active', 'In Maintenance', 'Scrapped', 'Available', 'Damaged'],
      default: 'Available'
    },
  },
  {
    timestamps: true
  }
);

export const Equipment=mongoose.model("Equipment",equipmentSchema)