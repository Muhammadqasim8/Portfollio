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
  }, {
    image:Images.a3,
    name: 'Bob Smith',
    position: 'Developer at Tech Solutions',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  
];

const Testimonials = () => {
  return (
    <div className='container mx-auto pb-20'>
      <div className='pt-36 pb-16'>
        <h1 className='text-5xl font-bold tracking-wide text-center text-[#0F172A] uppercase'>Testimonial</h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{paddingBottom:40}}
        className="mySwiper"
      >
        {/* {testimonials.reduce((acc, _, index, arr) => {
          if (index % 2 === 0) acc.push(arr.slice(index, index + 2));
          return acc;
        }, []).map((testimonialPair, index) => (
          <SwiperSlide key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonialPair.map((testimonial, idx) => (
              <TestCard 
                key={idx}
                image={testimonial.image}
                name={testimonial.name}
                position={testimonial.position}
                text={testimonial.text}
              />
            ))}
          </SwiperSlide>
        ))} */}
        {testimonials?.map((item, i) => (
           <SwiperSlide key={i}> <TestCard 
           image={item.image}
           name={item.name}
           position={item.position}
           text={item.text}
         /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
