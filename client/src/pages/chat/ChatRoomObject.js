import React from "react";
import { Avatar } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./ChatRoomObject.css";
const ChatRoomObject = ({ user, notif }) => {
  return (
    <div className="chatroom__object">
      <Avatar src={user.avatar} />
      <h2 classname="chatroom__object__name">{user.name}</h2>
      {notif ? <NotificationsActiveIcon /> : <CheckCircleIcon />}
    </div>
  );
};

export default ChatRoomObject;
