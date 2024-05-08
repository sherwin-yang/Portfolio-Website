import React from "react";
import HomeplanMockup from "../../../assets/homeplan-mockup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Mockup() {
  return (
    <div className="column-center-horizontally">
      <img alt="Homeplan Mockup" className="mockup" src={HomeplanMockup} />
      <a
        className="bold-text margin-top-10px play-demo"
        href="https://bit.ly/3dtA6Ba"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={["fas", "play"]} className="play-icon" />
        demo video (new)
      </a>
      <a
        className="bold-text margin-top-10px play-demo"
        href="https://bit.ly/3h9hn0h"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={["fas", "play"]} className="play-icon" />
        demo video (old)
      </a>
    </div>
  );
}

export default Mockup;
