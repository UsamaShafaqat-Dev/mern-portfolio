import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    projectType: {
      type: String,
      required: true, // Naya field
    },
    budget: {
      type: String,
      required: true, // Naya field
    },
    message: {
      type: String,
      required: true,
    },
    serviceRequired: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Message", messageSchema);
