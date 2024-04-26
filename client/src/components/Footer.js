import React from "react";
import Logo from "./img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <span style={{ color: 'white' }} >
        Made with <span role="img" aria-label="love"  style={{ color: 'red' }} >♥️</span> and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
