import "./Header.css";

const Header = () => {
  console.log("header");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img alt="logo" src="/images/logo.svg"></img>
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text"> Add New Clothes</button>
        </div>
        <div>Name</div>
        <div>
          <img alt="logo" src="/images/avatar.svg"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
