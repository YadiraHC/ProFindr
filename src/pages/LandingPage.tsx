import React from 'react';
import Header from '../components/LandingPage/Header';
import HeroSection from '../components/LandingPage/HeroSection';
import Categories from '../components/LandingPage/Categories';
import HowItWorks from '../components/LandingPage/HowItWorks';
import Testimonials from '../components/LandingPage/Testimonials';
import Footer from '../components/LandingPage/Footer';

const LandingPage: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Categories />
            <HowItWorks />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default LandingPage;
