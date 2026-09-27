import express from "express";
import nodemailer from "nodemailer";
import Message from "../models/Message.js";

const router = express.Router();

// 1. GET: Tamam messages fetch karne ke liye (Admin Dashboard)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Messages fetch karne mein error: " + error.message });
  }
});

// 2. POST: Naya message save karne aur Email bhejne ke liye
router.post("/", async (req, res) => {
  try {
    const { name, email, projectType, budget, message } = req.body;

    // A. Database mein save karein
    const newMessage = new Message({
      name,
      email,
      projectType,
      budget,
      message,
    });
    const savedMessage = await newMessage.save();

    // B. Email bhejne ka setup (Nodemailer)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "usamashafaqat22@gmail.com", // Yahan aapko email aayegi
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Estimated Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Email send karein
    await transporter.sendMail(mailOptions);

    res.status(201).json(savedMessage);
  } catch (error) {
    res
      .status(400)
      .json({
        message: "Message save ya send karne mein error: " + error.message,
      });
  }
});

// 3. DELETE: Message delete karne ke liye
router.delete("/:id", async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Message successfully deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Message delete karne mein error: " + error.message });
  }
});

export default router;
