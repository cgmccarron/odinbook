import React from "react";

import "./Sidebar.css";

import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";

import { Link } from "wouter";

import { useStateValue } from "../../StateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <Link href="/">
        <SidebarRow src={user.avatar} title="Christian McCarron" />
      </Link>
      <Link href="/pages">
        <SidebarRow Icon={EmojiFlagsIcon} title="Users" />
      </Link>
      <Link href="/chat">
        <SidebarRow Icon={ChatIcon} title="Chat" />
      </Link>
      <Link href="/friends">
        <SidebarRow Icon={PeopleIcon} title="Friends" />
      </Link>

      {user.username}
    </div>
  );
};

export default Sidebar;
