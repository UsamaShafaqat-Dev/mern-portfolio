import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      required: true,
      default: "Full Stack",
    },
    tags: [
      {
        type: String, // Jaise: 'MERN', 'Tailwind CSS'
      },
    ],
    liveLink: {
      type: String,
      required: false, // Optional rakha hai agar kisi project ka link na ho
    },
    githubLink: {
      type: String,
      required: false, // Optional
    },
    imageUrl: {
      type: String,
      required: true, // Cloudinary ka link yahan save hoga
    },
  },
  { timestamps: true },
); // timestamps automatically created_at aur updated_at save karega

export default mongoose.model("Project", projectSchema);
