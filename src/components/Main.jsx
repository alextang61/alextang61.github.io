import React from "react";
import alexpic from "../assets/alexpic.jpg";
import { TypeAnimation } from "react-type-animation";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Main = () => {
  return (
    <div id="main">
      <img className="w-full h-screen object-cover object-left" src={alexpic} />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Alex Tang
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I am
            <TypeAnimation
              sequence={[
                "a 3rd Year CS Student @ Georgia Tech.",
                2000,
                "exploring fullstack development.",
                2000,
                "continuously growing as a developer.",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <AiFillLinkedin size={20} />
            <AiFillGithub size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
