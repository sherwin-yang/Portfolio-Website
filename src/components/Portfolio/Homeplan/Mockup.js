import React from "react";
import HomeplanMockup from "../../../assets/homeplan-mockup.png";
import Download from "../../../assets/download-app-store.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Mockup() {
  return (
    <div className="column-center-horizontally">
      <img className="mockup" src={HomeplanMockup} />
      <a href="https://apple.co/3h5cdCw" target="_blank">
        <img className="download" src={Download} />
      </a>
      <a
        className="homeplan-link bold-text margin-top-10px"
        href="https://www.homeplan.id"
        target="_blank"
      >
        https://www.homeplan.id
      </a>
      <a
        className="bold-text margin-top-10px play-demo"
        href="https://bit.ly/3dtA6Ba"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fas", "play"]} className="play-icon" />
        demo video (new)
      </a>
      <a
        className="bold-text margin-top-10px play-demo"
        href="https://bit.ly/3h9hn0h"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fas", "play"]} className="play-icon" />
        demo video (old)
      </a>
    </div>
  );
}

export default Mockup;
