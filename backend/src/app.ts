import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/database";
import userRouters from "./routes/user.route";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use("/user" , userRouters)

export default app;
