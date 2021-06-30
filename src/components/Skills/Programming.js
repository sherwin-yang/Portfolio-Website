import React from "react";
import SwiftLogo from "../../assets/swift.png";
import PHPLogo from "../../assets/php.png";
import JavaLogo from "../../assets/java.png";
import JavascriptLogo from "../../assets/javascript.png";
import CLogo from "../../assets/c.png";
import CPLogo from "../../assets/c++.png";
import ReactTooltip from "react-tooltip";

function Programming() {
  return (
    <div className="margin-bottom-25px">
      <h5 className="bold-text skills-subtitle">Programming Language : </h5>
      <img
        data-tip
        data-for="swift-tooltip"
        className="tech-used-logo"
        src={SwiftLogo}
      />
      <ReactTooltip id="swift-tooltip" place="top" effect="solid">
        Swift
      </ReactTooltip>
      <img
        data-tip
        data-for="java-tooltip"
        className="tech-used-logo"
        src={JavaLogo}
      />
      <ReactTooltip id="java-tooltip" place="top" effect="solid">
        Java
      </ReactTooltip>
      <img
        data-tip
        data-for="php-tooltip"
        className="tech-used-logo"
        src={PHPLogo}
      />
      <ReactTooltip id="php-tooltip" place="top" effect="solid">
        PHP
      </ReactTooltip>
      <img
        data-tip
        data-for="javascript-tooltip"
        className="tech-used-logo"
        src={JavascriptLogo}
      />
      <ReactTooltip id="javascript-tooltip" place="top" effect="solid">
        Javascript
      </ReactTooltip>
      <img
        data-tip
        data-for="c-tooltip"
        className="tech-used-logo"
        src={CLogo}
      />
      <ReactTooltip id="c-tooltip" place="top" effect="solid">
        C
      </ReactTooltip>
      <img
        data-tip
        data-for="c++-tooltip"
        className="tech-used-logo"
        src={CPLogo}
      />
      <ReactTooltip id="c++-tooltip" place="top" effect="solid">
        C++
      </ReactTooltip>
    </div>
  );
}

export default Programming;
