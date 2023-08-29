import React from "react";

const WorkItem = ({ year, title, place, details }) => {
  return (
    <div className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4 list-none">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center items-center justify-start text-xs md:text-sm">
          <span className="text-lg inline=block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {place}
          </span>
          <span className="text-base font-semibold text-[#001b5e]">
            {title}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {year}
          </span>
          <span className="my-2 text-base font-normal text-stone-500">
            {details}
          </span>
        </p>
      </li>
    </div>
  );
};

export default WorkItem;
