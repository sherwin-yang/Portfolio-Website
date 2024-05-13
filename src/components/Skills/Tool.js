import React from "react";
import VSCodeLogo from "../../assets/vscode.png";
import FirebaseLogo from "../../assets/firebase.png";
import PostmanLogo from "../../assets/postman.png";
import SketchLogo from "../../assets/sketch.png";
import FigmaLogo from "../../assets/figma.png";
import ReactTooltip from "react-tooltip";

function Tool() {
  return (
    <div className="margin-bottom-25px">
      <h5 className="bold-text skills-subtitle">Tools : </h5>
      <img
        data-tip
        alt="Visual Studio Code"
        data-for="vscode-tooltip"
        className="tech-used-logo"
        src={VSCodeLogo}
      />
      <ReactTooltip id="vscode-tooltip" place="top" effect="solid">
        Visual Studio Code
      </ReactTooltip>

      <img
        data-tip
        alt="Firebase"
        data-for="firebase-tooltip"
        className="tech-used-logo"
        src={FirebaseLogo}
      />
      <ReactTooltip id="firebase-tooltip" place="top" effect="solid">
        Firebase
      </ReactTooltip>

      <img
        data-tip
        alt="Postman"
        data-for="postman-tooltip"
        className="tech-used-logo"
        src={PostmanLogo}
      />
      <ReactTooltip id="postman-tooltip" place="top" effect="solid">
        Postman
      </ReactTooltip>

      <img
        data-tip
        alt="Figma"
        data-for="figma-tooltip"
        className="tech-used-logo"
        src={FigmaLogo}
      />
      <ReactTooltip id="figma-tooltip" place="top" effect="solid">
        Figma
      </ReactTooltip>

      <img
        data-tip
        alt="Sketch"
        data-for="sketch-tooltip"
        className="tech-used-logo"
        src={SketchLogo}
      />
      <ReactTooltip id="sketch-tooltip" place="top" effect="solid">
        Sketch
      </ReactTooltip>
    </div>
  );
}

export default Tool;
