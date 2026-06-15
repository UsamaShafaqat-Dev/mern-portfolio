import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs"; // Bcrypt wapis laya gaya

import projectRoutes from "./routes/projectRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import Admin from "./models/Admin.js"; // Admin model wapis laya gaya

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("USAMA MERN-STACK Backend API is running!");
});

// Proper Database Creation Script
const createDefaultAdmin = async () => {
  try {
    const adminCount = await Admin.countDocuments();
    // Agar database khali hai (jaise aapke screenshot mein hai)
    if (adminCount === 0) {
      // .trim() use kiya taake koi extra space error na de
      const username = process.env.ADMIN_USERNAME.trim();
      const password = process.env.ADMIN_PASSWORD.trim();

      const hashedPassword = await bcrypt.hash(password, 10);
      const defaultAdmin = new Admin({
        username: username,
        password: hashedPassword,
      });

      await defaultAdmin.save();
      console.log("👤 Admin account successfully saved to MongoDB!");
    }
  } catch (error) {
    console.log("Error creating admin:", error.message);
  }
};

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB successfully!");
    await createDefaultAdmin(); // Yahan save hoga
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB connection error:", error.message);
  });
