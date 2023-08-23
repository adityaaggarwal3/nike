import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={29} />
        </a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </nav>
    </header>
  );
};

export default Header;
