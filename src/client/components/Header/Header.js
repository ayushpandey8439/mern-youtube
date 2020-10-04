import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Header.css";
import logo from "./../../assets/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";

function Header() {
  return (
    <Router>
      <div className="header">
        <div className="header_branding">
          <MenuIcon className="header_menu_icon"></MenuIcon>
          <Link to="/" className="header_logo_link">
            <img src={logo} className="header_logo"></img>
            <div className="header_brand">YouTube</div>
          </Link>
        </div>

        <div className="header_search">
          <input
            variant="outlined"
            className="header_search_box"
            placeholder="Search"
          ></input>
          <div className="header_search_icon">
            <SearchIcon></SearchIcon>
          </div>
        </div>

        <div className="header_options">
          <div className="header_option">
            <VideoCallIcon fontSize="large" />
          </div>
          <div className="header_option">
            <AppsIcon fontSize="large" />
          </div>
          <div className="header_option">
            <NotificationsIcon fontSize="large" />
          </div>
          <div className="header_option">
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Header;
