import React from "react";
import UIKitLogo from "../../../assets/uikit.png";
import WatchKitLogo from "../../../assets/watchkit.png";
import HealthKitLogo from "../../../assets/healthkit.png";
import AVFoundationLogo from "../../../assets/avfoundation.png";
import ReactTooltip from "react-tooltip";

function Tech() {
  return (
    <div>
      <div className="portfolio-subtitle">
        <p>Technology I Implemented : </p>
        <img
          data-tip
          data-for="uikit-tooltip"
          className="tech-used-logo"
          src={UIKitLogo}
        />
        <ReactTooltip id="uikit-tooltip" place="top" effect="solid">
          UIKit
        </ReactTooltip>
        <img
          data-tip
          data-for="watchkit-tooltip"
          className="tech-used-logo"
          src={WatchKitLogo}
        />
        <ReactTooltip id="watchkit-tooltip" place="top" effect="solid">
          WatchKit
        </ReactTooltip>
        <img
          data-tip
          data-for="healthkit-tooltip"
          className="tech-used-logo"
          src={HealthKitLogo}
        />
        <ReactTooltip id="healthkit-tooltip" place="top" effect="solid">
          HealthKit
        </ReactTooltip>
        <img
          data-tip
          data-for="avfoundation-tooltip"
          className="tech-used-logo"
          src={AVFoundationLogo}
        />
        <ReactTooltip id="avfoundation-tooltip" place="top" effect="solid">
          AVFoundation
        </ReactTooltip>
      </div>
    </div>
  );
}

export default Tech;
