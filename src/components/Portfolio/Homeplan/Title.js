import React from "react";
import HomeplanLogo from "../../../assets/homeplan-logo.png";

function Title() {
  return (
    <div className="homeplan">
      <div className="brand-logo row-center-horizontally">
        <img alt="Homeplan" className="app-img" src={HomeplanLogo} />
        <strong>Homeplan</strong>
      </div>
      <div className="description">
        <p className="bold-text">
          App to helps you simplify your home renovation by getting design
          inpiration, consult with professionals, and get budget estimation.
          <span> </span>
          <span className="grey-text">(App is no longer available in App Store)</span>
        </p>
      </div>
    </div>
  );
}

export default Title;
