import mongoose from 'mongoose';

const workCenterSchema = new mongoose.Schema(
  {
    workCenter: {
      type: String,
      required: [true, 'Work Center name is required'],
      trim: true,
      unique: true,
      maxlength: [100, 'Work Center name cannot exceed 100 characters']
    },
    code: {
      type: String,
      required: [true, 'Code is required'],
      trim: true,
      unique: true,
      uppercase: true,
      maxlength: [20, 'Code cannot exceed 20 characters']
    },
    tag: {
      type: String,
      trim: true,
      maxlength: [50, 'Tag cannot exceed 50 characters'],
      default: ''
    },
    alternativeWorkcenters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WorkCenter'
      }
    ],
    alternativeWorkcenterNames: [
      {
        type: String,
        trim: true
      }
    ],
    costPerHour: {
      type: Number,
      required: [true, 'Cost per hour is required'],
      min: [0, 'Cost per hour cannot be negative'],
      default: 0
    },
    capacity: {
      type: Number,
      required: [true, 'Capacity is required'],
      min: [0, 'Capacity cannot be negative'],
      default: 1.00
    },
    timeEfficiency: {
      type: Number,
      required: [true, 'Time Efficiency is required'],
      min: [0, 'Time Efficiency cannot be negative'],
      max: [100, 'Time Efficiency cannot exceed 100'],
      default: 100.00
    },
    oeeTarget: {
      type: Number,
      required: [true, 'OEE Target is required'],
      min: [0, 'OEE Target cannot be negative'],
      max: [100, 'OEE Target cannot exceed 100'],
      default: 0
    }
  },
  {
    timestamps: true
  }
);


export const WorkCenter = mongoose.model('WorkCenter', workCenterSchema);

