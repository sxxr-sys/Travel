import express from "express";
import dotenv from "dotenv";
import userRouters from "./routes/user.route";
import cors from "cors";
import bodyParser from "body-parser";
import { Connect } from "./utils/db";

const app = express();
dotenv.config()

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}
));

app.use("/user", userRouters);

app.listen(PORT, async () => {
Connect(process.env.MONGO_URI as string)
});

export default app;
