import React from 'react'
import "./Button.css";

const Contact = () => {
  return (
    <div className='bg-[#0f172a] py-8 px-8 lg:px-4'>
        <div className='container mx-auto flex flex-col gap-4 text-center sm:flex-row justify-between items-center'>
            <h3 className='text-[25px] md:text-[30px] lg:text-[40px] m-0 text-white font-[600]'>Intrested working with me?</h3>
            <div>
            <a class="px-btn px-btn-theme px-btn-contact">Contact Now</a>
          </div>


        </div>
      
    </div>
  )
}

export default Contact
