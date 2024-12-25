import { Request, Response } from "express";
import User from "../models/user";


export const Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send({ message: "User not found" });

        const isMatch = password === user.password

        console.log(password, "inputpassword");
        console.log(user.password, "user password");
        

        if (!isMatch) return res.status(403).send({ message: "Username or password incorrect" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
}

export const Signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
     try {
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}


