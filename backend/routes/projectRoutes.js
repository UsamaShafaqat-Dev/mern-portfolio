import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// 1. GET: Fetch all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Projects fetch karne mein error: " + error.message });
  }
});

// 2. POST: Add new project
router.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Project save karne mein error: " + error.message });
  }
});

// 3. PUT: Edit/Update project
router.put("/:id", async (req, res) => {
  try {
    const existingProject = await Project.findById(req.params.id);
    if (!existingProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Condition: Agar form se nayi image aayi hai toh wo use hogi, warna purani image hi rahegi taake picture gayab na ho
    const updatedData = {
      ...req.body,
      imageUrl: req.body.imageUrl || existingProject.imageUrl,
    };

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true },
    );
    res.status(200).json(updatedProject);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Project update karne mein error: " + error.message });
  }
});

// 4. DELETE: Remove project
router.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project successfully deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Project delete karne mein error: " + error.message });
  }
});

export default router;
