import "./Header.css";
import logoImage from "../../images/Logo.svg";

const Header = ({ onCreateModal, temperature }) => {
  // console.log("header");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img alt="logo" src={logoImage}></img>
        </div>
        <div>Jan. 13th, 2024</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="add_clothes-button"
          >
            {" "}
            +Add New Clothes
          </button>
        </div>
        <h3>Veronica Steele</h3>
        <div>
          <img
            alt="avatar"
            src={require("../../images/Avatar.svg").default}
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
