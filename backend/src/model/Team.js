import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: [true, 'Team name is required'],
      trim: true,
      unique: true,
      maxlength: [100, 'Team name cannot exceed 100 characters']
    },
    teamMembers: [
      {
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
    }
    ],
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

export const Team=mongoose.model("Team",teamSchema)