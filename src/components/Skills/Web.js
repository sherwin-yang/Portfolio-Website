import React from "react";
import HTMLLogo from "../../assets/html.png";
import CSSLogo from "../../assets/css.png";
import LaravelLogo from "../../assets/laravel.png";
import BootstrapLogo from "../../assets/bootstrap.png";
import ReactJSLogo from "../../assets/reactjs.png";
import ReactTooltip from "react-tooltip";

function Web() {
  return (
    <div className="margin-bottom-25px">
      <h5 className="bold-text skills-subtitle">Web Development : </h5>
      <img
        data-tip
        data-for="html-tooltip"
        className="tech-used-logo"
        src={HTMLLogo}
      />
      <ReactTooltip id="html-tooltip" place="top" effect="solid">
        HTML
      </ReactTooltip>
      <img
        data-tip
        data-for="css-tooltip"
        className="tech-used-logo"
        src={CSSLogo}
      />
      <ReactTooltip id="css-tooltip" place="top" effect="solid">
        CSS
      </ReactTooltip>
      <img
        data-tip
        data-for="laravel-tooltip"
        className="tech-used-logo"
        src={LaravelLogo}
      />
      <ReactTooltip id="laravel-tooltip" place="top" effect="solid">
        Laravel
      </ReactTooltip>
      <img
        data-tip
        data-for="bootstrap-tooltip"
        className="tech-used-logo"
        src={BootstrapLogo}
      />
      <ReactTooltip id="bootstrap-tooltip" place="top" effect="solid">
        Bootstrap
      </ReactTooltip>
      <img
        data-tip
        data-for="reactjs-tooltip"
        className="tech-used-logo"
        src={ReactJSLogo}
      />
      <ReactTooltip id="reactjs-tooltip" place="top" effect="solid">
        ReactJS
      </ReactTooltip>
    </div>
  );
}

export default Web;
