import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// 1. GET: Tamam messages fetch karne ke liye (Admin Dashboard ke liye)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }); // Naye messages upar ayenge
    res.status(200).json(messages);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Messages fetch karne mein error: " + error.message });
  }
});

// 2. POST: Naya message save karne ke liye (Contact Form ke liye)
router.post("/", async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Message save karne mein error: " + error.message });
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
