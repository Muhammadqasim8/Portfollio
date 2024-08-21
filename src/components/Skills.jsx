import React from "react";
import { Images } from "../utils/images";
import SkillCard from "./SkillCard";

const cardData = [
  { bgColor: '#9BD3D0', title: 'HTML', icon: 'fab fa-html5' },
  { bgColor: '#FEC447', title: 'CSS', icon: 'fab fa-css3' },
  { bgColor: '#FECCB5', title: 'React JS', icon: 'fab fa-react' },
  { bgColor: '#92B5FF', title: 'Angular', icon: 'fab fa-angular' },
  { bgColor: '#C4D39B', title: 'IOS App', icon: 'fab fa-apple' },
  { bgColor: '#D2CEFF', title: 'App Dev', icon: 'fab fa-android' },
];

const Skills = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 pt-24 px-8">
      <div className="flex flex-col pl-4 pt-16">
        <h3 className="font-bold uppercase text-[26px] md:text-[50px] leading-[1.2] text-[#0F172A] pb-16">
          My Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 pb-3 gap-4">
          {cardData.map((card, index) => (
            <SkillCard
              key={index}
              bgColor={card.bgColor}
              title={card.title}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
      <div className="flex items-end">
        <img src={Images.skill} alt="Skills Illustration" />
      </div>
    </div>
  );
};

export default Skills;
