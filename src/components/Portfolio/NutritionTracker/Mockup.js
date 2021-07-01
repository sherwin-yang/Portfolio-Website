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
      <a
        className="bold-text margin-top-10px github-repo"
        href="https://github.com/sherwin-yang/Food-and-Nutrition-Tracker"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "github"]} className="github-icon" />
        github repository
      </a>
    </div>
  );
}

export default Mockup;
