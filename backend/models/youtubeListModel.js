import mongoose from "mongoose";

const youtubeListModel = mongoose.Schema({
  urls: String,
});

export default mongoose.model("youtubeList", youtubeListModel);
