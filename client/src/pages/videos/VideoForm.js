import React, { useState } from "react";

const VideoForm = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          className="pm__input"
          placeholder="Paste a youtube video URL here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default VideoForm;
