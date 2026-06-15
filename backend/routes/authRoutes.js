import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const router = express.Router();

// Proper Database Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Database se check karein (trim ke sath taake space ka issue na aaye)
    const admin = await Admin.findOne({ username: username.trim() });
    if (!admin) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // 2. Encrypted password match karein
    const isMatch = await bcrypt.compare(password.trim(), admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // 3. Login pass hone par Token banayen
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token, username: admin.username });
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
});

export default router;
