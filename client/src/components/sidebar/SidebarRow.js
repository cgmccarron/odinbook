import React from "react";
import Avatar from "@mui/material/Avatar";
import "./SidebarRow.css";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebar__row">
      {src && <Avatar src={src} className="avatar" />}
      {Icon && <Icon className="mui__icon" />}
      <p>{title}</p>
    </div>
  );
};

export default SidebarRow;
