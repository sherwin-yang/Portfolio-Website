import React from "react";
import Contact from "../components/Home/Contact";
import Resume from "../components/Home/Resume";

function Footer() {
  return (
    <div className="footer">
      <div class="dropdown-divider"></div>
      <div className="vertical-margin-25px"></div>
      <h3 className="name name-subtitle-size center-text">Sherwin Yang</h3>
      <Resume />
      <div className="vertical-margin-25px"></div>
      <Contact />
    </div>
  );
}

export default Footer;
