import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Cards = ({ bgColor, title, description, icon }) => {
  return (
    <div className={`border-2 border-black  sm:p-2 lg:p-4 `} style={{ backgroundColor: bgColor }}>
      <div className='flex justify-center items-start gap-4 p-4'>
        <div className='flex text-black bg-white  justify-center items-center  p-4 border-2 border-black'>
          <i className={`${icon} text-[35px]`}></i>
        </div>
        <div>
          <h5 className='text-[#0f172A] text-xl font-semibold'>{title}</h5>
          <p className='text-[#334155] text-sm font-light text-wrap'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
