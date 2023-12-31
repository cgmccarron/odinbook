import React, { useState } from "react";
import { YouTube } from "@mui/icons-material";
import "./VideoForm.css";

const VideoForm = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="video__form">
      <form>
        <YouTube className="mui__icon" />
        <input
          type="text"
          className="vf__input"
          placeholder="Paste a youtube video URL here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default VideoForm;
