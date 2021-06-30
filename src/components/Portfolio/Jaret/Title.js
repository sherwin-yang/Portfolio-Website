import React from "react";
import JaretLogo from "../../../assets/jaret-logo.png";

function Title() {
  return (
    <div className="jaret">
      <div className="brand-logo row-center-horizontally">
        <img className="app-img" src={JaretLogo} />
        <strong>Jaret</strong>
      </div>
      <div className="description">
        <p className="bold-text">
          An activity scheduler app that helps users to avoid overly-optimistic
          on how long certain task would take by giving reports on which
          activities are taking too long or on time.
        </p>
      </div>
    </div>
  );
}

export default Title;
