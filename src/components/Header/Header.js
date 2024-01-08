import "./Header.css";

const Header = () => {
  console.log("header");
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
          <button type="text"> Add New Clothes</button>
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
