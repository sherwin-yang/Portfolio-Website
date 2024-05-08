import React from "react";
import Name from "../components/Home/Name";
import Contact from "../components/Home/Contact";
import Resume from "../components/Home/Resume";
import AboutMe from "../components/Home/AboutMe";
import ScrollIndicator from "../components/ScrollIndicator";

function Home() {
  return (
    <div className="home-page">
      <Name />
      <Resume />
      <AboutMe />
      <Contact />
      <br></br>
      <ScrollIndicator />
      <br></br>
    </div>
  );
}

export default Home;
