import React from "react";
import BadmintechLogo from "../../../assets/badmintech-logo.png";

function Title() {
  return (
    <div className="badmintech">
      <div className="brand-logo row-center-horizontally">
        <img className="app-img" src={BadmintechLogo} />
        <strong>Badmintech</strong>
      </div>
      <div className="description">
        <p className="bold-text">
          App to helps badminton player to train their basic badminton skills
          (shots, serves, grip, footworks, and positioning).
          <span className="grey-text">
            Currently developed for Lob Shot only using machine learning
            prediction by sending gyroscope and accelerometer motion datas
            (using Core Motion) from Apple Watch to tell which shots are good or
            bad.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Title;
