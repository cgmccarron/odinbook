import React from "react";
import Avatar from "@mui/material/Avatar";

import "./Message.css";

const MessageObject = ({ text, user }) => {
  return (
    <div className="message">
      <div className="message__top">
        <Avatar></Avatar>
        <p>{user.name}</p>
      </div>
      <div className="message__bottom">{text}</div>
    </div>
  );
};

export default MessageObject;
