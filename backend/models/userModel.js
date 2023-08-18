import mongoose, { Schema } from "mongoose";

const userModel = mongoose.Schema({
  username: { type: String, required: true },
  email: String,
  password: { type: String, required: true, select: false },
  avatar: String,
  bio: { type: String, maxLength: 255 },
  youtubeUrls: {
    type: [Schema.Types.ObjectId],
    ref: "youtubeList",
  },
  amazonLinks: {
    type: [Schema.Types.ObjectId],
    ref: "amazonLinks",
  },
});

export default mongoose.model("users", userModel);
