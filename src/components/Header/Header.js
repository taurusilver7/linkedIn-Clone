import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption/HeaderOption";

import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { logout, selectUser } from "../../features/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signOut = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      {/* <h1>Header component</h1> */}
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search LinkedIn" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar title={user?.displayName} onClick={signOut} />
      </div>
    </div>
  );
};

export default Header;
