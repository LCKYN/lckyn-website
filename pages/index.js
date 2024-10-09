// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Footer } from '../components/sections/Footer';

const Home = () => {
    return (
        <div className="bg-darker text-white min-h-screen flex flex-col pt-16 pb-32 md:pb-0 appearance-none">
            <Navbar />
            <Hero />

            <Section id="about-me" title="About Me">
                <About />
            </Section>

            <Section id="experience" title="Experience">
                <Experience />
            </Section>

            <Footer />
        </div>
    );
};

export default Home;
