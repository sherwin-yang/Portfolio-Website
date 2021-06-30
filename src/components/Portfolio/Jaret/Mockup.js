import React from "react";
import JaretMockup from "../../../assets/jaret-mockup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Mockup() {
  return (
    <div className="column-center-horizontally">
      <img className="mockup" src={JaretMockup} />
      <a
        className="bold-text margin-top-10px play-demo"
        href="https://bit.ly/3mnYir7"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fas", "play"]} className="play-icon" />
        demo video
      </a>
    </div>
  );
}

export default Mockup;
