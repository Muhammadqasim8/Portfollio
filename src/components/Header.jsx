import React, { useEffect, useState } from 'react'
import { Images } from '../utils/images'
import Button from './Button'
import './Button.css'

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <div className={`${scrollPosition>160 ? "bg-white" : "bg-transparent"} fixed w-full`}>
        <div className='container mx-auto flex items-center justify-between  relative py-5 lg:py-3'>
            <div>
                <a href="3"><img src={Images.logo} alt="logo" /></a>
            </div>
            <ul className='flex justify-center items-center gap-5'>
                <li className='text-base font-medium '><a className='hover:underline ' href="">HOME</a></li>
                <li className='text-base font-medium'><a href="">SERVICES</a></li>
                <li className='text-base font-medium'><a href="">SKILLS</a></li>
                <li className='text-base font-medium'><a href="">PORTFOLIO</a></li>
                <li className='text-base font-medium'><a href="">CONTACT</a></li>
            </ul>
            <div>
            <a class="px-btn px-btn-theme">Contact Now</a>
            </div>

        </div>
      
    </div>
  )
}

export default Header
