import { Avatar } from "@mui/material";

import React from "react";
import "./Story.css";

const Story = ({ image, profilePic, title }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profilePic} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
