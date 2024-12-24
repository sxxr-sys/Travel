import { User } from "../models/user.model.js";

export const getMe = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findOne({ _id: id });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
