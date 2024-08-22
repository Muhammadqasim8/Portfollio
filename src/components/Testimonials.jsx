import React from 'react';
import TestCard from './TestCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Images } from "../utils/images";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    image: Images.a1, 
    name: 'Jennifer Lutheran',
    position: 'CEO at pxdraft',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    image: Images.a2,
    name: 'John Doe',
    position: 'CTO at Example',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
  },
  {
    image: Images.a3,
    name: 'Alice Johnson',
    position: 'Designer at Creative Inc.',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    image:Images.a1,
    name: 'Bob Smith',
    position: 'Developer at Tech Solutions',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    image:Images.a2,
    name: 'Bob Smith',
    position: 'Developer at Tech Solutions',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  }, 
  {
    image:Images.a3,
    name: 'Bob Smith',
    position: 'Developer at Tech Solutions',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
];

const Testimonials = () => {
  return (
    <div className='container mx-auto lg:py-26 py-16'>
      <div className='pb-6 lg:pb-10'>
        <h1 className='text-3xl lg:text-5xl font-bold tracking-wide text-center text-[#0F172A] uppercase'>Testimonial</h1>
      </div>
      <div className='px-6'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{ paddingBottom: 40 }}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
            
          },
          
        }}
      >
        <div className=''>
        {testimonials?.map((item, i) => (
          <SwiperSlide key={i}>
            <TestCard 
              image={item.image}
              name={item.name}
              position={item.position}
              text={item.text}
            />
          </SwiperSlide>
        ))}
        </div>
      </Swiper>

      </div>
    </div>
  );
};

export default Testimonials;
