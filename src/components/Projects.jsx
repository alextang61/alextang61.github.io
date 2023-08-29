import React from "react";
import ProjectItem from "./ProjectItem";
import its from "../assets/its.png";
import frogger from "../assets/frogger.png";
import pomodoro from "../assets/Pomodoro.png";
import jordle from "../assets/jordle.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Here is a few of my favorite projects that I'd like to share!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={its}
          title="Intelligent Tutoring System"
          language="Xcode"
        />
        <ProjectItem img={frogger} title="Frogger" language="Android Studio" />
        <ProjectItem
          img={pomodoro}
          title="Productivity App"
          language="HTML/CSS/JavaScript"
        />
        <ProjectItem img={jordle} title="Jordle" language="JavaFx" />
      </div>
    </div>
  );
};

export default Projects;
