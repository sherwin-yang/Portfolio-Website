import React from "react";

function AboutMe() {
  return (
    <div className="column-center-horizontally">
      <div className="about-me-component">
        <p className="about-me-title">Hi, welcome!</p>
        <p>
          I am an Apple Developer Academy graduate and co-founder of a small
          startup. Studied Computer Science in BINUS University, Jakarta from
          September 2017 and finished my study in March 2021 (will be officially
          graduated as Bachelor of Engineering in July 2021).
        </p>
        <p>
          Write my first Swift code in February 2020 when I joined Apple
          Developer Academy @BINUS, now I have developed 9 iOS/iPadOS/watchOS
          app. Successfully launched my first app in December 2020 and became my
          startup project since then (
          <a
            className="bold-text homeplan-link"
            href="https://www.homeplan.id"
            target="_blank"
          >
            homeplan.id
          </a>
          ).
        </p>
        <span>
          Has interest in stock investment/financial products, health&nutrition,
          and sports.
        </span>
      </div>
    </div>
  );
}

export default AboutMe;
