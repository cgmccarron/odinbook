import { Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";

const chatModel = mongoose.Schema({
  timestamp: Timestamp,
  content: { Type: String, maxLength: 100 },
});

export default mongoose.model("chat", chatModel);
