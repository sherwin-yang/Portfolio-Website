import React from "react";
import Programming from "../components/Skills/Programming";
import Web from "../components/Skills/Web";
import Mobile from "../components/Skills/Mobile";
import Tool from "../components/Skills/Tool";
import Other from "../components/Skills/Other";

function Skills() {
  return (
    <div className="portfolio-skills-page column-center-horizontally">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-content">
        <Mobile />
        <Programming />
        <Web />
        <Tool />
        <Other />
        <div className="vertical-margin-25px"></div>
      </div>
    </div>
  );
}

export default Skills;
