import mongoose from "mongoose";

const userModel = mongoose.Schema({
  username: { type: String, required: true },
  email: String,
  password: { type: String, required: true, select: false },
  avatar: String,
  bio: { type: String, maxLength: 255 },
});

export default mongoose.model("users", userModel);
