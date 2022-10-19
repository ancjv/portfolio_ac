import React from 'react';

// import img


const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Angel
              </h2>
              <p className='mb-4 text-accent'>
                Freelance Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I'm web developer currently based in Panama. I hope that my projects here convey a least a small part of my creativity and my enthusiasm in the web developer. I also share ideas on my blog about design, games, tips and recommendations. If u wish to say hi, write me a email. <br />
                <br />
                Currently I focus on responsive websites with knowledge in HTML CSS l React and JavaScript.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;