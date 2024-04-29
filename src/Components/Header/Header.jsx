import React from "react";
// import {Link} from 'react-router-dom'
import "./Header.css";
import log from "./../../assets/logo.png";
// import { Link } from "@mui/material";
const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={log}></img>
        </div>
        <input
          type="text"
          className="header-input"
          placeholder="🔍 Search"
        ></input>

        <div className="user-details">
          <img className="notification"></img>
          <p className="user-name"></p>
        </div>
      </header>
    </div>
  );
};
export default Header;
