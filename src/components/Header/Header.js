import React from "react";
import "./Header.css";
import logoImage from "../../images/Logo.svg";
import avatarImage from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, temperature }) => {
  // console.log("header");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img alt="logo" src={logoImage}></img>
          </Link>
        </div>
        <div>Jan. 13th, 2024</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="add_clothes-button"
          >
            +Add New Clothes
          </button>
        </div>
        <Link to="/profile">Veronica Steele</Link>
        <div>
          <img alt="avatar" src={avatarImage}></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
