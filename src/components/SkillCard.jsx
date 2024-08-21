import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Card.css'
const SkillCard = ({ bgColor, title, icon }) => {
    return (
      <div className={`border-2 border-black card`} style={{ backgroundColor: bgColor }}>
        <div className='flex justify-start items-center gap-4 p-4'>
          <div className='flex text-black bg-white justify-center items-center border-2 border-black' style={{ width: '70px', height: '70px' }}>
            <i className={`${icon} text-[35px]`}></i>
          </div>
          <div >
            <h5 className='text-[#0f172A] text-xl font-semibold  '>{title}</h5>
          </div>
        </div>
      </div>
    );
  };
  
  export default SkillCard;