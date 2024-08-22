import React from 'react'
import { Images } from "../utils/images";
import "./Button.css";
const Projects = () => {
  return (
    <div className='bg bg-[rgb(255,247,237)] bg-opacity-100 py-16 lg:py-26'>

      <div className='container mx-auto md:px-4'>
        <h3 className='uppercase text-center text-3xl sm:text-5xl font-bold text-[#0F172A] pb-10'>Latest Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pb-20 ">
            <div className=''>
                <img className='' src={Images.p1} alt="image" />
            </div>
            <div className='flex flex-col justify-start items-start  gap-6'>
                <div className='bg-[#FFEDD5] font-light- text-[#0F172A] text-sm flex justify-center items-center h-[34px] w-[117px] rounded-full'>
                    <p className='uppercase '>web design</p>
                </div>
                <h3 className='text-[#0F172A] sm:text-4xl text-2xl font-semibold' >Website Design for Marketing Agency Startup</h3>
                <p className='text-[#555555] text-base '>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>

                    <div>
                         <a class="px-btn px-btn-theme">VIEW PROJECT</a>
                    </div>

            </div>
        

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pb-20 ">
            
            <div className='flex flex-col justify-start items-start  gap-6'>
                <div className='bg-[#FFEDD5] font-light- text-[#0F172A] text-sm flex justify-center items-center h-[34px] w-[117px] rounded-full'>
                    <p className='uppercase '>web design</p>
                </div>
                <h3 className='text-[#0F172A] sm:text-4xl text-2xl font-semibold' >Website Design for Marketing Agency Startup</h3>
                <p className='text-[#555555] text-base '>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>

                    <div>
                         <a class="px-btn px-btn-theme">VIEW PROJECT</a>
                    </div>

            </div>
            <div >
                <img className='' src={Images.p2} alt="image" />
            </div>
        

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pb-20 ">
            <div className=''>
                <img className='' src={Images.p3} alt="image" />
            </div>
            <div className='flex flex-col justify-start items-start  gap-6'>
                <div className='bg-[#FFEDD5] font-light- text-[#0F172A] text-sm flex justify-center items-center h-[34px] w-[117px] rounded-full'>
                    <p className='uppercase '>web design</p>
                </div>
                <h3 className='text-[#0F172A] sm:text-4xl text-2xl font-semibold' >Website Design for Marketing Agency Startup</h3>
                <p className='text-[#555555] text-base '>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>

                    <div>
                         <a class="px-btn px-btn-theme">VIEW PROJECT</a>
                    </div>

            </div>
        

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pb-20 ">
            
            <div className='flex flex-col justify-start items-start  gap-6'>
                <div className='bg-[#FFEDD5] font-light- text-[#0F172A] text-sm flex justify-center items-center h-[34px] w-[117px] rounded-full'>
                    <p className='uppercase '>web design</p>
                </div>
                <h3 className='text-[#0F172A] sm:text-4xl text-2xl font-semibold' >Website Design for Marketing Agency Startup</h3>
                <p className='text-[#555555] text-base '>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>

                    <div>
                         <a class="px-btn px-btn-theme">VIEW PROJECT</a>
                    </div>

            </div>
            <div className=''>
                <img className='' src={Images.p4} alt="image" />
            </div>
        

        </div>

      </div>
    </div>
  )
}

export default Projects
