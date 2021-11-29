import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <a href="https://github.com/vadvoice" target="_blank">
        <img
          src="https://raw.githubusercontent.com/vadvoice/assets/master/public/logos/circle-small.ico"
          alt="V"
        />
      </a>
      {/* TODO: QR code  */}
    </header>
  );
};
export { Header };
