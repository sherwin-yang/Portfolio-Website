import React from "react";
import NutritionTrackerMockup from "../../../assets/nutrition-tracker-mockup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Mockup() {
  return (
    <div className="column-center-horizontally">
      <img className="mockup" src={NutritionTrackerMockup} />
      <a
        className="bold-text margin-top-10px play-demo"
        href="https://bit.ly/39t8MSo"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fas", "play"]} className="play-icon" />
        demo video
      </a>
    </div>
  );
}

export default Mockup;
