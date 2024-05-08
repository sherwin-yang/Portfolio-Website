import React from "react";
import ResumeFile from "../../assets/CV/CV2021.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Resume() {
  return (
    <div className="row-center-horizontally justify-row-content-center">
      <FontAwesomeIcon icon={["fas", "arrow-right"]} />
      <a href={ResumeFile} target="_blank" rel="noreferrer">
        <button className="resume-button">resume</button>
      </a>
    </div>
  );
}

export default Resume;
