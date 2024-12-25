import { Request, Response, Router } from "express";  
import User from "../models/user";
import { Signup } from "../controllers/auth";

const authRouters = Router();

authRouters.post("/sign-up", Signup)
  .post("sign-in", );

export default authRouters;
