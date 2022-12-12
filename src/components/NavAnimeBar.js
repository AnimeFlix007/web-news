import React from "react";
import "../assests/css/NavAnimeBar.css";
import Logo from "../assests/images/Logo.jpg";
import HamburgurDrawer from './HamburgurDrawer';

const Navbar = ({ setcategory }) => {
  return (
    <div className="Navbar">
      <div className="icons">
        <HamburgurDrawer setcategory={setcategory} />
      </div>

      <div className="Logo">
        <div className="headcontainer">
          <img src={Logo} alt="Logo" />
          <span>AnimeFlix's News</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
