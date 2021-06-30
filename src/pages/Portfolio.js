import React from "react";
import Homeplan from "../components/Portfolio/Homeplan/Homeplan.js";
import Badmintech from "../components/Portfolio/Badmintech/Badmintech.js";
import Jaret from "../components/Portfolio/Jaret/Jaret.js";
import NutritionTracker from "../components/Portfolio/NutritionTracker/NutritionTracker.js";

function Portfolio() {
  return (
    <div
      className="portfolio-skills-page column-center-horizontally"
      id="portfolio"
    >
      <h1 className="portfolio-title" data-aos="fade-down">
        Portfolio
      </h1>
      <Homeplan />
      <Badmintech />
      <Jaret />
      <NutritionTracker />
    </div>
  );
}

export default Portfolio;
