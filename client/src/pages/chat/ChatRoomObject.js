import React from "react";
import { Avatar } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChatRoomObject = ({ user, notif }) => {
  return (
    <div>
      <Avatar src={user.avitar} />
      <h2>{user.name}</h2>
      {notif ? <NotificationsActiveIcon /> : <CheckCircleIcon />}
    </div>
  );
};

export default ChatRoomObject;
