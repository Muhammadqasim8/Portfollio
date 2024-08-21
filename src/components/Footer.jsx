import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0f172a] border-t-[0.1px] border-[dimgrey]'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center '>
                <div className='flex justify-center items-center py-6 gap-4 text-white '>
                <i class="fab fa-facebook-f hover:text-[#ea580c]" ></i>
                <i class="fab fa-twitter hover:text-[#ea580c]"></i>
                <i class="fab fa-instagram hover:text-[#ea580c]"></i>
                <i class="fab fa-linkedin-in hover:text-[#ea580c]"></i>
                <i class="fab fa-pinterest hover:text-[#ea580c]"></i>

                </div>
                <p class="font-normal text-white text-opacity-75">© 2023 copyright all right reserved by pxdraft</p>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
