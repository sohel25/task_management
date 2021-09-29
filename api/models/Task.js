import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
    },
    Description: {
      type: String,
    },
    Createdby: {
    type: String,
    },
    Assingto: {
        type: String,
      },
      status: {
        type: String,
      },
      Createdat: { 
        type:  Date ,
      timestamps: true }
  },
 { 
      timestamps: true }
);

export default mongoose.model("Task", TaskSchema);