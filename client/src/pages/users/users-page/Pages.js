import React from "react";
import UserSearch from "../UserSearch";
import Users from "../Users";

import "./Pages.css";

const Pages = () => {
  return (
    <div className="page">
      <UserSearch className="page__top" />
      <Users
        name="Christian"
        profilePic="https://media.licdn.com/dms/image/C4D03AQH1yMD3NzYDDQ/profile-displayphoto-shrink_800_800/0/1517493780761?e=1694649600&v=beta&t=faLehq2SPhoNtDZi4suG6SvXNGEISrbdjIRw5mSyVXQ"
        friend={true}
      />
      <Users
        name="Goose"
        profilePic="https://media.licdn.com/dms/image/C4D03AQH1yMD3NzYDDQ/profile-displayphoto-shrink_800_800/0/1517493780761?e=1694649600&v=beta&t=faLehq2SPhoNtDZi4suG6SvXNGEISrbdjIRw5mSyVXQ"
        friend={true}
      />
      <Users
        name="Mayhem"
        profilePic="https://media.licdn.com/dms/image/C4D03AQH1yMD3NzYDDQ/profile-displayphoto-shrink_800_800/0/1517493780761?e=1694649600&v=beta&t=faLehq2SPhoNtDZi4suG6SvXNGEISrbdjIRw5mSyVXQ"
        friend={false}
      />
    </div>
  );
};

export default Pages;
