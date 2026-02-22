import mongoose from "mongoose";


const trackerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    amount: {type: String, required: true},
    Category: String,
    status: {
      type: String,
      enum: ["expensive", "income"],
      default: "expensive",
    },
    dueDate: Date,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Task = mongoose.model("Task", trackerSchema);

export default Task;
