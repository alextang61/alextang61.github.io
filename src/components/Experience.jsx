import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "May 2023 - Aug 2023",
    place: "ForeFlight",
    title: "Software Engineer Intern",
    details:
      "I was a full-stack intern that completed both web and server tickets to improve the ForeFlight application. Each ticket was rigorously unit tested, peer reviewed, and checked by QA until it was integrated into the codebase. As my capstone project, I created a full stack module within the web app to give pilots a visualization of their post-flight analysis.",
  },
  {
    year: "Aug 2022 - Dec 2022",
    place: "Tabnam",
    title: "Frontend Developer Intern",
    details:
      "During my time at Tabnam, I began with creating initial designs in Figma. Once the layout was mapped out, I used various React libraries to develop the web view and ultimately designed and realized the central dashboard using Polaris (ReactJs).",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          place={item.place}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Experience;
