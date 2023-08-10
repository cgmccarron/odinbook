import React, { useState } from "react";
import "./PostMaker.css";
import { Avatar, Input } from "@mui/material";
import {
  VideoCameraFront,
  PhotoLibrary,
  InsertEmoticon,
} from "@mui/icons-material";
import instance from "../../../axios";

const PostMaker = () => {
  /* input is the what the user writes in the text input for the post
    image is the image that is in the post */

  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  /* handleChange will set the img file in the post  */

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  /* will submit the input and image to db to become a post */
  const handleSubmit = () => {
    console.log("Submit", input, image);
  };

  const makePost = () => {
    instance.post("/upload/posts", {
      username: "Goose McCarron",
      imgName: "null",
      text: input,
      avatar: "me",
      timestamp: new Date(),
    });
  };

  return (
    <div className="post__maker">
      {/* pm = post__maker for shorter syntax */}
      <div className="pm__top">
        <Avatar src="https://media.licdn.com/dms/image/C4D03AQH1yMD3NzYDDQ/profile-displayphoto-shrink_800_800/0/1517493780761?e=1694649600&v=beta&t=faLehq2SPhoNtDZi4suG6SvXNGEISrbdjIRw5mSyVXQ" />
        <form>
          <input
            type="text"
            className="pm__input"
            placeholder="What's up?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            className="pm__fileSelector"
            disableUnderline="true"
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <button onClick={makePost} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="pm__bottom">
        <div className="pm__options">
          <PhotoLibrary style={{ color: "#003d5b" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="pm__options">
          <InsertEmoticon style={{ color: "#edae49" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default PostMaker;
