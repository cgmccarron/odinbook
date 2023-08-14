import React from "react";
import MessageObject from "./MessageObject.js";

import "./Chat.css";
const Chat = () => {
  let user = { name: "Christian", dog: "goose" };
  return (
    <div>
      This is the chat box Will need to have two users timestamp and message
      content
      <MessageObject
        text="This is a chat. My dog's name is goose and I love him very much because he so very smart. How are you? Have you ever had an empanada?
        Just come outside for the night (Yeah)
        Take your time, get your light (Yeah)
        Johnny Dang, yeah, yeah
        I been out geekin' (Bitch)
        
        [Chorus: Travis Scott]
        FE!N, FE!N, FE!N, FE!N, FE!N (Yeah)
        FE!N, FE!N, FE!N, FE!N, FE!N (Yeah)
        FE!N, FE!N, FE!N, FE!N, FE!N
        FE!N, FE!N (Yeah), FE!N, FE!N, FE!N
        
        [Verse 1: Travis Scott & Sheck Wes]
        The career's more at stake when you in your prime (At stake)
        Fuck that paper, baby, my face on the dotted line (Dot, yeah)
        I been flyin' out of town for some peace of mind (Yeah, yeah, bitch)
        It's like always they just want a piece of mine (Ah)
        I been focus"
        user={user}
      ></MessageObject>
    </div>
  );
};

export default Chat;
