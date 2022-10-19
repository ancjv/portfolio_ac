import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-2x1 font-semibold capitalize mb-3'>{item.description}</p>
      <a href='https://github.com/ancjv' className='text-2x1 font-semibold capitalize mb-3'>{item.icon}</a>
      <button className='bg-tertiary btn btn-md bg-accent hover:bg-secondary-hover transition-all md:tracking-[3px]'>
          <a href='https://github.com/ancjv'>Link Project</a>
      </button>
    </div>
  );
};

export default Project;