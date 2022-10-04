import React from "react";
import logo from "../logo.svg";
function Header() {
  return (
    <div className="header d-flex flex-row align-items-center">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="header">Eden</h1>
    </div>
  );
}

export default Header;
