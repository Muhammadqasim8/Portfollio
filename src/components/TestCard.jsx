import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TestCard = ({ image, name, position, text }) => {
  return (
    <div className="border-2 border-black">
      <div className="flex justify-center items-start gap-4 p-4">
        <div className="border-2 border-black">
          <img src={image} alt="img" />
        </div>
        <div className="flex flex-col gap-1 justify-center items-start">
          <p className="text-[#555555] text-sm font-normal text-wrap">{text}</p>
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col">
            <h className="text-[#0f172A] text-base font-bold">{name}</h>
            <span className="text-[#555555] text-sm font-normal">
              {position}
            </span>
            </div>
            <div className="flex justify-end">
              <i className="fas fa-quote-left text-[100px] text-slate-200 "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
