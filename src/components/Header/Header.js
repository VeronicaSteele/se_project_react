import React from "react";
import "./Header.css";
import logoImage from "../../images/Logo.svg";
import avatarImage from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function getDate() {
  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });
  return <span>{currentDate}</span>;
}

const Header = ({ onCreateModal, temperature, location }) => {
  // console.log("header");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img alt="logo" src={logoImage}></img>
          </Link>
        </div>
        <div className="date">{getDate}</div>
        <div className="location">{location}</div>
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
