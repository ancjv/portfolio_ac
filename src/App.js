import About from './components/About';
import BackTopBtn from './components/BackToTopBtn';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import React from 'react';
import Skills from './components/Skills';

const App = () => {
  return (
  <div>
    <Header />
    <Hero />
    <Brands />
    <About />
    <Skills />
    <Portfolio />
    <Services />
    <Contact />
    <Footer />
    <BackTopBtn />
    <div style={{ height: '0px'}}></div>
    </div>
  );
};

export default App;
