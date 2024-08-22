import React from 'react';
import './Marquee.css';
import b1 from "../assets/brand1.svg";
import b2 from "../assets/brand2.svg";
import b3 from "../assets/brand3.svg";
import b4 from "../assets/brand4.svg";
import b5 from "../assets/brand5.svg";
import b6 from "../assets/brand6.svg";
import b7 from "../assets/brand7.svg";

const Marquee = () => {
  return (
    <div className='bg-[#0f172a] py-8 px-4 overflow-hidden'>
      <div className='marquee-wrapper'>
        <div className='marquee-content flex justify-between container mx-auto gap-4 sm:gap-0'>
          <img src={b1} alt="" />
          <img src={b2} alt="" />
          <img src={b3} alt="" />
          <img className='hidden sm:block' src={b4} alt="" />
          <img className='hidden sm:block' src={b5} alt="" />
          {/* {[b1, b2, b3, b4, b5].map((src, index) => (
           <div key={index} className='px-10'> <img  src={src} alt={`brand${index + 1}`} className='' /></div>
          ))} */}
        </div>
        
      </div>
    </div>
  );
};

export default Marquee;
