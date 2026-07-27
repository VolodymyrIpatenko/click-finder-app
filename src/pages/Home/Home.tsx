import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

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
