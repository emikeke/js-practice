import logo from "../../assets/ss_logo_horizontal.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [notClickedIcon, setClickedIcon] = useState(false);
  const handleIcon = () => {
    setClickedIcon(!notClickedIcon);
  };
  return (
    <div className="nav-wrapper">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>  
      <div className="menu-icon" onClick={handleIcon}>
        <i className={notClickedIcon ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
      <div className="menu-wrapper">
        <ul className={notClickedIcon ? "nav-menu-active" : "nav-menu"}>
          <Link onClick={() => setClickedIcon(false)} to="/about">ABOUT</Link>
          <Link onClick={() => setClickedIcon(false)} to="/faq">FAQ</Link>
          <Link onClick={() => setClickedIcon(false)} to="/profile/search">PROFILE SEARCH</Link>
          <Link onClick={() => setClickedIcon(false)} to="/duo/search">DUO SEARCH</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;