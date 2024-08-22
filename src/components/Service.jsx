import React from "react";
import Cards from "./Cards";
import { Images } from "../utils/images";
import './Card.css';

const Services = () => {




  
  const cardData = [
    {
      bgColor: '#9BD3D0',
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'fas fa-solid fa-phone',
      
    },
    {
      bgColor: '#FEC447',
      title: 'Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'fas fa-laptop',
    },
    {
      bgColor: '#FECCB5',
      title: 'SEO Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'fas fa-exclamation-triangle',
    },
    {
      bgColor: '#92B5FF',
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'fas fa-columns',
    },
    {
        bgColor: '#C4D39B',
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: 'fas fa-ruler-vertical',
      },
      {
        bgColor: '#D2CEFF',
        title: 'SEO Marketing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: 'fas fa-globe',
      },
  ];

  return (
    <div  id="service" className="fly-container">
      <div className="container mx-auto flex flex-col justify-center items-center py-16 lg:py-28  gap-4">
        <div className="lg:col-span-6 text-center  text-4xl  lg:text-5xl pb-10 px-4 font-bold uppercase mx-auto">
          <h3>
            <span>My Service</span>
          </h3>
        </div>
        <div className="grid md:grid-cols-2 px-4 gap-4">
          {cardData.map((card, index) => (
            <Cards
              key={index}
              bgColor={card.bgColor}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
