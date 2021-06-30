import React from "react";

function Learned() {
  return (
    <div className="portfolio-subtitle">
      <p>What I Learned (as iOS Developer) : </p>
      <ul>
        <li>Implement MVVM design pattern</li>
        <li>Implement delegate and notification pattern</li>
        <li>Apply UIScrollView</li>
        <li>
          Connect the iOS app to back-end server trough API using URLSession
        </li>
        <li>Programmatic UI</li>
        {/* <li>Save user settings in User Defaults</li> */}
        <li>
          Implement SpriteKit framework for the 2D floorplan canvas design tool.{" "}
          <span className="grey-text">(feature deprecated)</span>
        </li>
        <li>Apply external libraries using cocoapods dependency manager</li>
        <li>Using different schemes for production and development</li>
        <li>Upload project to TestFlight for internal testing</li>
        <li>Record events for analytics (Mixpanel)</li>
      </ul>
    </div>
  );
}

export default Learned;
