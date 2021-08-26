import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import HeaderMain from "../HeaderMain/HeaderMain";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className='top-border'></div>
      <Navbar />
      <div className="header-container">
        <HeaderMain />
      </div>
    </>
  );
};

export default Header;
