import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB, sequelize } from "./models/index.js";
import authRoutes from "./routes/auth.js";
import itemRoutes from "./routes/items.js";

dotenv.config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "OK" }));
app.use("/auth", authRoutes);
app.use("/api/items", itemRoutes);

const start = async () => {
  await connectDB();
  await sequelize.sync({ alter: true });
  app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
  });
};

start();
