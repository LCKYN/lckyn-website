// pages/index.js
import React from 'react';
import Section from '../components/Section';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Footer } from '../components/sections/Footer';

// pages/index.js
const Home = () => {
    return (
        <div className="bg-darker text-white min-h-screen pb-64">
            <Hero />

            <Section title="About Me">
                <About />
            </Section>

            <Section title="Experience">
                <Experience />
            </Section>

            <Footer />
        </div>
    );
};


export default Home;
