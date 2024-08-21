import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button className={`flex justify-center items-center text-white text-sm font-medium bg-[#EA580C] px-5 py-[10px]   ${className}`}>
      {children}
    </button>
  );
};

export default Button;



