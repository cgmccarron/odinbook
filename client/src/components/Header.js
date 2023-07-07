import React from "react";
import {
  HomeOutlined as Home,
  Search,
  FlagOutlined as Flag,
  SubscriptionsOutlined as Subscriptions,
  SupervisedUserCircleOutlined as Users,
  StorefrontOutlined as Storefront,
  AccountBox as Avatar,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore as Expand,
} from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      {/* Left side of header to display logo */}
      <div className="header__left">
        <img src="" alt="Odinbook logo" />
      </div>
      {/* searchbar for app*/}
      <div className="header__input">
        <Search />
        <input type="text" placeholder="Search" />
      </div>
      {/* collapseable buttons for navigating the app */}
      <div className="header__center">
        <div className="header__option header__option__active">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <Storefront fontSize="large" />
        </div>
        <div className="header__option">
          <Subscriptions fontSize="large" />
        </div>
        <div className="header__option">
          <Users fontSize="large" />
        </div>
      </div>
      {/* right side of header to display avatar, user, and functions relating to the user */}
      <div className="header__right">
        <div className="header__info">
          <Avatar fontSize="large" />
          <h4>Name</h4>
          <Add />
          <Forum />
          <NotificationsActive />
          <Expand />
        </div>
      </div>
    </div>
  );
};

export default Header;
