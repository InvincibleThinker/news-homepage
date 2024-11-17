import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  let [isActive, setIsActive] = useState("false");
  let toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <img
        src="/assets/images/logo.svg"
        alt="company-logo"
        className="web-logo"
      />

      <img
        src="/assets/images/icon-menu.svg"
        alt="open menu button"
        className="open-nav-button"
        onClick={() => toggleMenu()}
      />
      <ul className={`navlist ${isActive ? "close-nav" : "open-nav"}`}>
        <img
          src="/assets/images/icon-menu-close.svg"
          alt="close menu button"
          className="close-nav-button"
          onClick={() => toggleMenu()}
        />
        <li className="navitems home">Home</li>
        <li className="navitems new">New</li>
        <li className="navitems popular">Popular</li>
        <li className="navitems trending">Trending</li>
        <li className="navitems categories">Categories</li>
      </ul>
    </nav>
  );
}

export default Navbar;
