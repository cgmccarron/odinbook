import React from "react";
import ChatRoomObject from "./ChatRoomObject";

const ChatRoom = () => {
  let user = {
    name: "Christian McCarron",
    avatar:
      "https://images.unsplash.com/photo-1682685797857-97de838c192e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  };

  return (
    <div>
      <ChatRoomObject user={user} notif={false} />
      <ChatRoomObject user={user} notif={true} />
      <ChatRoomObject user={{name: "Goose", avatar: "111"}} notif={true} />
    </div>
  );
};

export default ChatRoom;
