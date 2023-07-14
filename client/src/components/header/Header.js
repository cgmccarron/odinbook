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

import { IconButton } from "@mui/material";
import { Link } from "wouter";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* Left side of header to display logo */}
      <div className="header__left">
        <img src="./Facebook-logo.png" alt="Odinbook logo" />
      </div>
      {/* searchbar for app*/}
      <div className="header__input">
        <Search />
        <input type="text" placeholder="Search" />
      </div>
      {/* collapseable buttons for navigating the app */}
      <div className="header__center">
        <div className="header__options header__options__active">
          <Link href="/">
            <Home className="center__icon mui_icon" />
          </Link>
        </div>
        <div className="header__options">
          <Link href="/pages">
            <Flag className="center__icon mui_icon" />
          </Link>
        </div>
        <div className="header__options">
          <Link href="/market">
            <Storefront className="center__icon mui_icon" />
          </Link>
        </div>
        <div className="header__options">
          <Link href="videosPage">
            <Subscriptions className="center__icon mui_icon" />
          </Link>
        </div>
        <div className="header__options">
          <Link href="friends">
            <Users className="center__icon mui_icon" />
          </Link>
        </div>
      </div>
      {/* right side of header to display avatar, user, and functions relating to the user */}
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Name</h4>
          <IconButton>
            <Add className="right__icon mui_icon" />
          </IconButton>
          <IconButton>
            <Forum className="right__icon mui_icon" />
          </IconButton>
          <IconButton>
            <NotificationsActive className="right__icon mui_icon" />
          </IconButton>
          <IconButton>
            <Expand className="right__icon mui_icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
