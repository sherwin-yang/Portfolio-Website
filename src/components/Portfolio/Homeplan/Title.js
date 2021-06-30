import React from "react";
import HomeplanLogo from "../../../assets/homeplan-logo.png";

function Title() {
  return (
    <div className="homeplan">
      <div className="brand-logo row-center-horizontally">
        <img className="app-img" src={HomeplanLogo} />
        <strong>Homeplan</strong>
      </div>
      <div className="description">
        <p className="bold-text">
          App to helps you simplify your home renovation by getting design
          inpiration, budget estimation, and consult with professionals
        </p>
      </div>
    </div>
  );
}

export default Title;
