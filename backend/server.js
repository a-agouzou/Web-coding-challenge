import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routes/tasks.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
    process.exit(1);
  });

  app.use('/api/tasks', taskRoutes);


app.listen(port, () => console.log(`Server running on port ${port}`));
