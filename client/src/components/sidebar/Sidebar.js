import React from "react";

import "./Sidebar.css";

import SidebarRow from "./SidebarRow";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow src="./Facebook-logo.png" title="Name" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Users" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
    </div>
  );
};

export default Sidebar;
