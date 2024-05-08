import React from "react";
import BadmintechLogo from "../../../assets/badmintech-logo.png";

function Title() {
  return (
    <div className="badmintech">
      <div className="brand-logo row-center-horizontally">
        <img alt="Badmintech" className="app-img" src={BadmintechLogo} />
        <strong>Badmintech</strong>
      </div>
      <div className="description">
        <p className="bold-text">
          App to helps badminton players to train their basic badminton skills. 
          <span> </span>
          <span className="grey-text">
            Has developed for Lob Shot only using machine learning prediction 
            by sending gyroscope and accelerometer motion datas (using Core Motion) 
            from Apple Watch to tell which shots are good or bad.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Title;
