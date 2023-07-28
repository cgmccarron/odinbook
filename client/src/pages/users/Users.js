import React from "react";
import Avatar from "@mui/material/Avatar";
import { PersonAdd, PersonRemove } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import "./User.css";

const Users = ({ name, profilePic, friend }) => {
  return (
    <div className="user__component">
      {profilePic && <Avatar src={profilePic} className="avatar" />}
      <h3 className="user__name">{name}</h3>
      {friend ? (
        <p>
          <IconButton>
            <PersonRemove />
          </IconButton>
        </p>
      ) : (
        <p>
          <IconButton>
            <PersonAdd />
          </IconButton>
        </p>
      )}
    </div>
  );
};

export default Users;
