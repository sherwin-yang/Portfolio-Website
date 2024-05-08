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
        alt="HTML"
        data-for="html-tooltip"
        className="tech-used-logo"
        src={HTMLLogo}
      />
      <ReactTooltip id="html-tooltip" place="top" effect="solid">
        HTML
      </ReactTooltip>

      <img
        data-tip
        alt="CSS"
        data-for="css-tooltip"
        className="tech-used-logo"
        src={CSSLogo}
      />
      <ReactTooltip id="css-tooltip" place="top" effect="solid">
        CSS
      </ReactTooltip>

      <img
        data-tip
        alt="Laravel"
        data-for="laravel-tooltip"
        className="tech-used-logo"
        src={LaravelLogo}
      />
      <ReactTooltip id="laravel-tooltip" place="top" effect="solid">
        Laravel
      </ReactTooltip>

      <img
        data-tip
        alt="Bootstrap"
        data-for="bootstrap-tooltip"
        className="tech-used-logo"
        src={BootstrapLogo}
      />
      <ReactTooltip id="bootstrap-tooltip" place="top" effect="solid">
        Bootstrap
      </ReactTooltip>
      
      <img
        data-tip
        alt="ReactJS"
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
