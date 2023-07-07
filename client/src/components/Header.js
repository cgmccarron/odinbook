import React from "react";
import {
  Home,
  Search,
  Flag,
  SubscriptionsOutlined,
  SupervisedUserCircleOutlined,
} from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="" alt="Odinbook logo" />
      </div>
      <div className="header__input">
        <Search />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header__center">
        <div className="header__option header__option__active">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleOutlined fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Header;
