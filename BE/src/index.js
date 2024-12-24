import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Connect } from "./utils/db.js";
import { authRouter } from "./router/auth.router.js";
import { orderRouter } from "./router/order.router.js";
import { userRouter } from "./router/user.router.js";
import { authMiddleware } from "./middleware/auth.middleware.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);

const PORT = process.env.PORT;

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);

app.listen(PORT, () => {
  Connect(process.env.MONGODB_URL);
  console.log("Backend listening on port", PORT);
});
