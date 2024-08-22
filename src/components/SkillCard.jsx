import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Card.css'
const SkillCard = ({ bgColor, title, icon }) => {
    return (
      <div className={`border-2 border-black `} style={{ backgroundColor: bgColor }}>
        <div className='flex justify-start items-center gap-2 sm:gap-4 p-2 '>
          <div className='flex text-black bg-white justify-center p-2 lg:p-4 items-center border-2 border-black' >
            <i className={`${icon} text-3xl sm:text-[35px]`}></i>
          </div>
          <div >
            <h5 className='text-[#0f172A] text-sm sm:text-base lg:text-xl font-bold lg:font-semibold  '>{title}</h5>
          </div>
        </div>
      </div>
    );
  };
  
  export default SkillCard;