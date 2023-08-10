import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { ChatBubble, NearMe, ThumbUp } from "@mui/icons-material";

const Post = ({ profilePic, username, imgName, message, timestamp }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__info">
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
        {/* image name is coming later on */}
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUp className="MUI__icon" />
          <p>like</p>
        </div>
        <div className="post__option">
          <ChatBubble className="MUI__icon" />
          <p>comment</p>
        </div>
        <div className="post__option">
          <NearMe className="MUI__icon" />
          <p>share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
