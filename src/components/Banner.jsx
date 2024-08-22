import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Images } from "../utils/images";

import "./Button.css";

const Banner = () => {
  return (
    <div className=" bg-[rgb(255,247,237)] bg-opacity-100 ">

      <div className="grid lg:grid-cols-2 pt-36 px-4 sm:px-2 pb-24 container mx-auto">
        <div className="px-2 sm:px-6 lg:px-10  flex flex-col items-center lg:items-start justify-center gap-6">
          <h6 className="text-black font-semibold  text-base uppercase">
            👋, My name is Krinky
          </h6>

          <div className="md:text-3xl text-lg lg:text-4xl font-semibold">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[500, "I'm a Designer", 1000, "I'm a Developer"]}
              speed={40}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </div>
          <p className="text-[16px] md:text-[20px] mb-[8px] md:mb-[16px] text-[#555555]">
            Based in Los Angeles, California.
          </p>
          <div>
            <a class="px-btn px-btn-theme">Let's Start</a>
          </div>
        </div>
        <div className="pt-10 lg:pt-0" >
        <img src={Images.banner} alt="image" />
      </div>
      </div>
      
    </div>
  );
};

export default Banner;
