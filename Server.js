import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";
//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//static file use
app.use(express.static(path.join(__dirname, "/client/build")));

//Middelwire
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", CategoryRoute);
app.use("/api/v1/product", productRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-Commerce website</h1>");
});

//port
const port = process.env.port;
app.listen(port, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan
      .white
  );
});
