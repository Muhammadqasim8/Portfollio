import React from "react";
import { Images } from "../utils/images";
import "./Button.css";


const About = () => {
  return (
    <div className="container mx-auto  grid lg:grid-cols-2 py-14 sm:py-16 lg:py-24 px-8  ">
      <div className="flex justify-center">
        <img src={Images.aboutme} alt="image" />
      </div>
      <div className="flex flex-col sm:pl-4 pt-16 ">
        <h3 className="font-[600] text-[26px] md:text-[40px] leading-[1.2] text-black mb-[25px]">
          I'm a Freelancer Front-end Developer with over 3 years of experience.
        </h3>
        <p class="text-[16px] md:text-[18px] text-[#555555]">
          I'm a Freelancer Front-end Developer with over 3 years of experience.
          I'm from San Francisco. I code and create web elements for amazing
          people around the world. I like work with new people. New people new
          Experiences.
        </p>
        <div class="grid grid-cols-12 pt-5">
          <div class="col-span-6 sm:col-span-4">
            <h5 class="text-[26px] text-orange-600 font-bold ">285+</h5>
            <span className="text-[#555555]">Projet Completed</span>
          </div>
          <div class="col-span-6 sm:col-span-4">
            <h5 class="text-[26px] text-orange-600 font-bold">190+</h5>
            <span className="text-[#555555]">Happy Clients</span>
          </div>
        </div>
        <div className="pt-6">
            <a className="px-btn px-btn-theme mr-4">Contact Me</a>
            
            <a className="px-btn px-btn-portfolio mt-4 ">Portfolio</a>
        </div>
      </div>
    </div>
  );
};

export default About;
