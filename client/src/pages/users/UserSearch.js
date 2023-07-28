import React, { useState } from "react";
import { Search } from "@mui/icons-material";

import "./UserSearch.css";

const UserSearch = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="user__search">
      <form>
        <Search />
        <input
          type="text"
          className="us__input"
          placeholder="Search for a user"
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

export default UserSearch;
