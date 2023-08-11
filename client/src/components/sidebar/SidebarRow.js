import React from "react";
import Avatar from "@mui/material/Avatar";
import "./SidebarRow.css";

import { Link } from "wouter";

const SidebarRow = ({ src, Icon, title, href }) => {
  return (
    <Link href={href}>
      <div className="sidebar__row">
        {src && <Avatar src={src} className="avatar" />}
        {Icon && <Icon className="mui__icon" />}
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default SidebarRow;
