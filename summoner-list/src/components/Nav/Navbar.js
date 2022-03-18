import logo from "../../assets/ss_logo_horizontal.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false); // mobile toggle
  const handleIcon = () => {
    setActive(!active);
  };
  return (
    <div className="nav-wrapper">
      <div className="logo-wrapper">
        <Link to="/" onClick={() => setActive(false)}>
          <img src={logo} alt="logo"></img>
        </Link>
      </div>  
      <div className="menu-icon" onClick={handleIcon}>
        <i className={active ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
      <div className="menu-wrapper">
        <ul className={active ? "nav-menu-active" : "nav-menu"}>
          <Link onClick={() => setActive(false)} to="/about">ABOUT</Link>
          <Link onClick={() => setActive(false)} to="/faq">FAQ</Link>
          <Link onClick={() => setActive(false)} to="/profile/search">PROFILE SEARCH</Link>
          <Link onClick={() => setActive(false)} to="/duo/search">DUO SEARCH</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;