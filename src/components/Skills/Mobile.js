import React from "react";
import XCodeLogo from "../../assets/xcode.png";
import ReactTooltip from "react-tooltip";

function Mobile() {
  return (
    <div className="margin-bottom-25px">
      <h5 className="bold-text skills-subtitle">Mobile : </h5>
      <img
        data-tip
        alt="XCode"
        data-for="xcode-tooltip"
        className="tech-used-logo"
        src={XCodeLogo}
      />
      <ReactTooltip id="xcode-tooltip" place="top" effect="solid">
        Native iOS Development
      </ReactTooltip>
    </div>
  );
}

export default Mobile;
