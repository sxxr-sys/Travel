import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";
import { Connect } from "../utils/db.js";

const app = express();
dotenv.config()

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000/", credentials: true }));

app.listen(PORT, () => {
    Connect(process.env.MONGODB_URL)
    console.log("Backend listening on port", PORT)
})