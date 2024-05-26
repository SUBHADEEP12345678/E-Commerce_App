import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//Middelwire
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", CategoryRoute);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-Commerce website</h1>");
});

//port
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan
      .white
  );
});
