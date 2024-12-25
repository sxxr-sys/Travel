import express, { Request, Response, Router } from "express";  
import User from "../models/user.model";


const userRouters = Router();
userRouters.get("/getUser", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
userRouters.post("/createUser", async (req: Request, res: Response) => {
  console.log(req)
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});



export default userRouters;
