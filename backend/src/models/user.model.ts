import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
    _id: mongoose.Types.ObjectId; // Ensure _id is of the correct type
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },  // Ensure unique constraint
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
