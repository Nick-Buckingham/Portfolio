import React from "react";
import footPlant from "../images/footPlant.PNG";
import gitHubLogo from "../images/github-logo.png";
const Header = () => {
  return (
    <header>
      <h1>Nicolas Buckingham</h1>
      <h3>Aspiring Web Developer</h3>
      <img src={footPlant} alt="Foot Plant to Fakie" width={500} />
      <br />
      <a href="https://github.com/Nick-Buckingham">
        <img src={gitHubLogo} alt="GitHub Logo" class="github-logo" />
      </a>
    </header>
  );
};

export default Header;
