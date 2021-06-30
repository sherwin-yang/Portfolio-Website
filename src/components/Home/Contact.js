import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <div className="row-center-horizontally justify-row-content-center contact-component">
      {/* <a href="" target="_blank" alt="phone-logo">
        <FontAwesomeIcon
          icon={["fas", "phone"]}
          size="2x"
          id="phone-logo"
          className="horizontal-margin-30"
        />
      </a> */}
      <a href="mailto:sher.yang79@gmail.com" target="_blank" alt="google-logo">
        <FontAwesomeIcon
          icon={["fab", "google"]}
          size="2x"
          id="google-logo"
          className="horizontal-margin-30"
        />
      </a>
      <a
        href="https://github.com/sherwin-yang"
        target="_blank"
        alt="github-logo"
      >
        <FontAwesomeIcon
          icon={["fab", "github"]}
          size="2x"
          id="github-logo"
          className="horizontal-margin-30"
        />
      </a>
      <a
        href="https://linkedin.com/in/sherwiny29"
        target="_blank"
        alt="linkedin-logo"
      >
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          size="2x"
          id="linkedin-logo"
          className="horizontal-margin-30"
        />
      </a>
    </div>
  );
}

export default Contact;
