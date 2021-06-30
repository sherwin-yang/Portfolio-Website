import React from "react";
import Title from "./Title.js";
import Role from "./Role.js";
import Learned from "./Learned";
import Mockup from "./Mockup";
import Tech from "./Tech.js";

function NutritionTracker() {
  return (
    <div>
      <div className="portfolio-projects row">
        <div className="col mockup-position">
          <Mockup />
        </div>
        <div className="col">
          <Title />
          <Role />
          <Learned />
          <Tech />
        </div>
      </div>
    </div>
  );
}

export default NutritionTracker;
