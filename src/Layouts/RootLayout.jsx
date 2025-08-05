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

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
