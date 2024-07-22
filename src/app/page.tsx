'use client';
import React from 'react';
import HeroSection from '../components/HeroSection';
import Header from '@/components/Header';
import FeaturesSection from '@/components/FeaturesSection';
import IPhoneShowcase from '@/components/IPhoneShowcase';
import IPhoneTradeIn from '@/components/IPhoneTradeIn';
import Footer from '@/components/Footer';

import CustomerReviews from '@/components/CustomerReviews';


const HomePage = () => {

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IPhoneShowcase />
        <IPhoneTradeIn />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;