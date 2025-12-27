import mongoose from 'mongoose';

const equipmentCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
      unique: true,
      maxlength: [100, 'Category name cannot exceed 100 characters']
    },
    responsible: {
      employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Responsible employee is required']
      },
      employeeName: {
        type: String,
        required: [true, 'Responsible employee name is required'],
        trim: true
      }
    },
    company: {
      type: String,
      required: [true, 'Company is required'],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

export const EquipmentCategory = mongoose.model('EquipmentCategory', equipmentCategorySchema);
