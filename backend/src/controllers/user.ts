import { Request, Response } from "express";
import User from "../models/user";

export const getUser = async  (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}