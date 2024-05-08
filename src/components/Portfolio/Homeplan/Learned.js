import React from "react";

function Learned() {
  return (
    <div className="portfolio-subtitle">
      <p>What I Learned (as iOS Developer) : </p>
      <ul>
        <li>Implement MVVM architecture</li>
        <li>Make API call using URLSession </li>
        <li>Implement delegate and notification design pattern</li>
        <li>
          Implement SpriteKit framework for the 2D floorplan canvas design tool.{" "}
          <span className="grey-text">(feature deprecated)</span>
        </li>
        <li>Integrate 3rd party libraries using Cocoapods as depedency manager</li>
        <li>Using different schemes for production and development</li>
        <li>Upload project to TestFlight for internal testing</li>
        <li>Record events for analytics (Mixpanel)</li>
      </ul>
    </div>
  );
}

export default Learned;
