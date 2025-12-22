import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Home from '../Home/Home';
import About from '../Home/About';
import Banner from '../Home/Banner';
import Projects from '../Home/Projects';
import Skills from '../Home/Skills';
import Contact from '../Home/Contact';
import Education from '../Home/Education';
import Foot from '../Home/Foot';
import ContactInfo from '../Home/ContactInfo';


const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <ContactInfo></ContactInfo>
      
      <Contact></Contact>
      {/* <Footer></Footer> */}
      <Foot></Foot>
    </div>
  );
};

export default RootLayout;
