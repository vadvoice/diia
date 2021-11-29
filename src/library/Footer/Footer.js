import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <NavLink activeClassName="active" to="/diia">
        <img
          className="Footer-img Footer-img__home"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffiles.softicons.com%2Fdownload%2Ftoolbar-icons%2Fmono-general-icons-2-by-custom-icon-design%2Fpng%2F512x512%2Fdocument.png&f=1&nofb=1"
          alt="home"
        />
      </NavLink>
      <NavLink activeClassName="active" to="/notifications">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_349900.png&f=1&nofb=1"
          alt="notifications"
        />
      </NavLink>
    </footer>
  );
};
export { Footer };
