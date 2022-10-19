import Projects from './Projects';
import React from 'react';

// import components


const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My Project
          </h2>
          <p className='subtitle'>
              Follow me on Github to see what I'm currently working. 
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;