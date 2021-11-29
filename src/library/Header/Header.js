import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/diia">
        <img
          src="https://raw.githubusercontent.com/vadvoice/assets/master/public/logos/circle-small.ico"
          alt="V"
        />
      </Link>
      {/* TODO: QR code  */}
    </header>
  );
};
export { Header };
