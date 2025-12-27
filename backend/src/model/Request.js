import mongoose from 'mongoose';

const maintenanceActivitySchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      maxlength: [200, 'Subject cannot exceed 200 characters']
    },
    status: {
      type: String,
      enum: ['In Progress',  'Blocked', 'Ready for next stage'],
      default: 'New Request',
      required: true
    },
    createdBy: {
      employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      employeeName: {
        type: String,
        required: true,
        trim: true
      }
    },
    maintenanceFor: {
      equipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipment',
        required: [true, 'Equipment is required']
      },
      equipmentName: {
        type: String,
        required: true,
        trim: true
      }
    },
    equipment: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Equipment"||"WorkCenter",
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true
    },
    requestDate: {
      type: Date,
      required: [true, 'Request date is required'],
      default: Date.now
    },
    maintenanceType: {
      type: String,
      enum: ['Corrective', 'Preventive'],
      required: [true, 'Maintenance type is required']
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Team",
      required: [true, 'Team is required'],
      trim: true
    },
    technician: {
      employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      employeeName: {
        type: String,
        required: true,
        trim: true
      }
    },
    scheduledDate: {
      type: Date,
      required: [true, 'Scheduled date is required']
    },
    duration: {
      type: Number,
      default: 0,
      min: [0, 'Duration cannot be negative']
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Critical'],
      default: 'Medium'
    },
    company: {
      type: String,
      required: [true, 'Company is required'],
      trim: true
    },
    notes: {
      type: String,
      trim: true,
      maxlength: [1000, 'Notes cannot exceed 1000 characters'],
      default: ''
    },
    instructions: {
      type: String,
      trim: true,
      maxlength: [1000, 'Instructions cannot exceed 1000 characters'],
      default: ''
    },
  },
  {
    timestamps: true
  }
);

export const MaintenanceActivity = mongoose.model('MaintenanceActivity', maintenanceActivitySchema);
