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
    message: {
      type: String,
      required: true,
    },
    serviceRequired: {
      type: String,
      required: false, // Isey explicitly optional rakha hai taake query pass ho jaye
    },
  },
  { timestamps: true },
);

export default mongoose.model("Message", messageSchema);
