import mongoose from "mongoose";

const amazonLinksModel = mongoose.Schema({
  url: String,
  imgSrc: String,
  title: String,
});

export default mongoose.model("amazonLinks", amazonLinksModel);
