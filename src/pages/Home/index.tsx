import React from 'react';
import { Header } from '../../components/layout/Header';
import {Hero} from '../../components/sections/Hero';
import {Features} from '../../components/sections/Features';
import {Newsletter} from '../../components/sections/Newsletter';
import { Footer } from '../../components/layout/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header variant="default" />
      <Hero />
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
