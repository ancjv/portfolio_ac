import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
        <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
        Blog Articles
        </h1>
          <p className='subtitle'>
          </p>
          
        </div>
        <div className='grid lg:grid-cols-2 gap-8'>
          {services.map((service, index) => {
            const { image, name, description } = service;
            return (
              <div className='bg-secondary p-10 rounded-2x1 hover:bg-primary' key={index}> 
                <img
                className='rounded-2xl'
                src={image}
                alt=''
                />
                <h4 className='text-xl font-medium mb-5'>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <button className='bg-tertiary btn btn-md bg-accent hover:bg-secondary-hover transition-all md:tracking-[3px]'>
          <a href='https://github.com/ancjv'>Link Blog</a>
      </button>
      </div>
    </section>
  );
};

export default Services;