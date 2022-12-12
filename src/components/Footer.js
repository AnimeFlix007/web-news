import React from 'react'
import '../assests/css/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.instagram.com/ig_zatchyt/" target="__blank">
          Devjit Bose
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/ig_zatchyt/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://github.com/AnimeFlix007" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCbjw_uml7UsUDax21VMH-tw" target="__blank">
        <i class="fab fa-youtube" style={{
          fontSize: "35px"
        }}></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;