import Task from "../models/Task.js";
import mongoose from "mongoose";


export const getTasks = async (req, res) => {
  console.log("getTasks");
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = req.body;
    const newTask = new Task(task);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    if (req.body.title) task.title = req.body.title;
    if (req.body.status) task.status = req.body.status;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params.id
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    await task.deleteOne();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
