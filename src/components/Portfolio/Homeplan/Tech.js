import React from "react";
import UIKitLogo from "../../../assets/uikit.png";
import URLSessionLogo from "../../../assets/url-session.png";
import SpriteKit from "../../../assets/spritekit.png";
import LottieFiles from "../../../assets/lottie-files.png";
import KingFisher from "../../../assets/kingfisher.png";
import Laravel from "../../../assets/laravel.png";
import PostgreSQL from "../../../assets/postgresql.png";
import ImageKit from "../../../assets/imagekit.png";
import ReactTooltip from "react-tooltip";

function Tech() {
  return (
    <div>
      <div className="portfolio-subtitle">
        <p>Technology I Implemented : </p>
        <img
          data-tip
          alt="UIKit"
          data-for="uikit-tooltip"
          className="tech-used-logo"
          src={UIKitLogo}
        />
        <ReactTooltip id="uikit-tooltip" place="top" effect="solid">
          UIKit
        </ReactTooltip>
        <img
          data-tip
          alt="URLSession"
          data-for="urlsession-tooltip"
          className="tech-used-logo"
          src={URLSessionLogo}
        />
        <ReactTooltip id="urlsession-tooltip" place="top" effect="solid">
          URLSession
        </ReactTooltip>
        <img
          data-tip
          alt="SpriteKit"
          data-for="spritekit-tooltip"
          className="tech-used-logo"
          src={SpriteKit}
        />
        <ReactTooltip id="spritekit-tooltip" place="top" effect="solid">
          SpriteKit
        </ReactTooltip>
        <img
          data-tip
          alt="KingFisher"
          data-for="kingfisher-tooltip"
          className="tech-used-logo"
          src={KingFisher}
        />
        <ReactTooltip id="kingfisher-tooltip" place="top" effect="solid">
          KingFisher
        </ReactTooltip>
        <img
          data-tip
          alt="Lottie"
          data-for="lottie-tooltip"
          className="tech-used-logo"
          src={LottieFiles}
        />
        <ReactTooltip id="lottie-tooltip" place="top" effect="solid">
          Lottie Animation
        </ReactTooltip>
        <br />
        <img
          data-tip
          alt="Laravel"
          data-for="laravel-tooltip"
          className="tech-used-logo margin-top-10px"
          src={Laravel}
        />
        <ReactTooltip id="laravel-tooltip" place="top" effect="solid">
          Laravel
        </ReactTooltip>
        <img
          data-tip
          alt="PostgreSQL"
          data-for="postgresql-tooltip"
          className="tech-used-logo margin-top-10px"
          src={PostgreSQL}
        />
        <ReactTooltip id="postgresql-tooltip" place="top" effect="solid">
          PostgreSQL
        </ReactTooltip>
        <img
          data-tip
          alt="ImageKit"
          data-for="imagekit-tooltip"
          className="tech-used-logo margin-top-10px"
          src={ImageKit}
        />
        <ReactTooltip id="imagekit-tooltip" place="top" effect="solid">
          ImageKit
        </ReactTooltip>
      </div>
    </div>
  );
}

export default Tech;
