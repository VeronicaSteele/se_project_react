import "./Header.css";

const Header = ({ onCreateModal }) => {
  // console.log("header");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img alt="logo" src={require("../images/Logo.svg").default}></img>
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            {" "}
            Add New Clothes
          </button>
        </div>
        <div>Name</div>
        <div>
          <img alt="avatar" src={require("../images/Avatar.svg").default}></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
