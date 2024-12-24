import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Password is wrong" });

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET_KEY
    );

    res.json({
      message: "Successfully logged in",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        updatedAt: user.updatedAt,
        createdAt: user.createdAt,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const emailExistingUser = await User.findOne({ email });

    if (emailExistingUser)
      return res.status(401).json({ message: "User already exists email" });

    const nameExistingUser = await User.findOne({ name });
    if (nameExistingUser)
      return res.status(401).json({ message: "User already exists name" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      name,
    });
    await user.save();
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET_KEY
    );
    res.json({
      message: "Successfully sign up",
      token,
      user: {
        name: user.name,
        email: user.email,
        updatedAt: user.updatedAt,
        createdAt: user.createdAt,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
