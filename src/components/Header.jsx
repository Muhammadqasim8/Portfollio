import React, { useEffect, useState } from 'react';
import { Images } from '../utils/images';
import Button from './Button';
import './Button.css';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  console.log(window.scrollY , "scroll")






  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  return (
    <div className={`${scrollPosition > 60 ? 'bg-white shadow-md' : 'bg-transparent'} fixed z-[20] w-full`}>
      <div className='container mx-auto flex items-center justify-between relative py-5 px-4 lg:py-3'>
        <div>
          <a href="3"><img src={Images.logo} alt="logo" /></a>
        </div>

        <div className='lg:hidden pr-2'>
          <img
            src={Images.sidebar}  
            alt="Menu"
            className='w-8 h-8 cursor-pointer'
            onClick={toggleMenu}
          />
        </div>

        <ul className={`lg:flex ${isMenuOpen ? 'hidden' : 'hidden lg:flex'} justify-center items-center gap-5`}>
          <li className={`text-base font-medium  ${window.scrollY > 0 && window.scrollY < 773 && "underline underline-[#ea580c] text-[#ea580c]"}`}><a className='hover:underline' href="">HOME</a></li>
          <li className={`text-base font-medium ${window.scrollY > 1600 && window.scrollY < 2398  && "underline underline-[#ea580c] text-[#ea580c]"}`}><a  href="#service">SERVICES</a></li>
          <li  className={`text-base font-medium ${window.scrollY > 2398 && window.scrollY < 3080  && "underline underline-[#ea580c] text-[#ea580c]"}`}><a href="">SKILLS</a></li>
          <li className={`text-base font-medium ${window.scrollY > 3208 && window.scrollY < 5765 && "underline underline-[#ea580c] text-[#ea580c]"}`}><a href="">PORTFOLIO</a></li>
          <li className={`text-base font-medium ${window.scrollY > 5765 && window.scrollY < 6839  && "underline underline-[#ea580c] text-[#ea580c]"}`}><a href="">CONTACT</a></li>
        </ul>

        {!isMenuOpen && (
          <div className='hidden lg:block'>
            <a className="px-btn px-btn-theme">Contact Now</a>
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div className='fixed top-[60px] left-0 right-0 bg-white shadow-lg p-5 z-[15] w-full lg:hidden'>
          <ul className='flex flex-col gap-5'>
            <li className='text-base font-medium'><a className='hover:underline' href="">HOME</a></li>
            <li className='text-base font-medium'><a href="">SERVICES</a></li>
            <li className='text-base font-medium'><a href="">SKILLS</a></li>
            <li className='text-base font-medium'><a href="">PORTFOLIO</a></li>
            <li className='text-base font-medium'><a href="">CONTACT</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
