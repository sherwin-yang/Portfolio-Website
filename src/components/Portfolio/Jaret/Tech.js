import React from "react";
import UIKitLogo from "../../../assets/uikit.png";
import CoreDataLogo from "../../../assets/core-data.png";
import ReactTooltip from "react-tooltip";

function Tech() {
  return (
    <div>
      <div className="portfolio-subtitle">
        <p>Technology I Implemented : </p>
        <img
          data-tip
          alt="UIKit"
          data-for="uikit-tooltip"
          className="tech-used-logo"
          src={UIKitLogo}
        />
        <ReactTooltip id="uikit-tooltip" place="top" effect="solid">
          UIKit
        </ReactTooltip>
        <img
          data-tip
          alt="Core Data"
          data-for="core-data-tooltip"
          className="tech-used-logo"
          src={CoreDataLogo}
        />
        <ReactTooltip id="core-data-tooltip" place="top" effect="solid">
          Core Data
        </ReactTooltip>
      </div>
    </div>
  );
}

export default Tech;
