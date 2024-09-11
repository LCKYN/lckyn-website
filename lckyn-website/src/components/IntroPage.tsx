"use client";

import React, { useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import styles from './IntroPage.module.css';

const IntroPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ParallaxProvider>
            <div className={`bg-gray-900 text-white ${styles.noScrollbar}`}>
                {/* Logo */}
                <div className="fixed top-4 left-4 text-white text-3xl font-bold z-50">
                    <Parallax opacity={[0, 1]} startScroll={0} endScroll={300}>
                        LCKYN
                    </Parallax>
                </div>

                {/* Intro section */}
                <section className="h-screen flex items-center justify-center sticky top-0">
                    <Parallax opacity={[1, 0]} startScroll={0} endScroll={500}>
                        <div className="text-center">
                            <h1 className="text-8xl font-bold mb-4">
                                It's me, the <span className="text-blue-400">LCKYN</span>
                            </h1>
                            <p className="text-xl max-w-xl mx-auto mb-8 text-gray-300">
                                I work on transforming complex data into actionable insights and developing cutting-edge machine learning solutions.
                            </p>
                        </div>
                    </Parallax>
                </section>

                {/* About Me section */}
                <section className="min-h-screen flex items-center justify-center py-20">
                    <Parallax translateY={[50, 0]} opacity={[0, 1, 1, 0]} startScroll={300} endScroll={1300}>
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-6xl font-bold mb-8">About Me</h2>
                            <p className="text-xl mb-6 text-gray-300">
                                As a passionate data scientist and machine learning engineer, I thrive on solving complex problems and creating innovative solutions. With a strong background in mathematics and computer science, I bring a unique perspective to every project I undertake.
                            </p>
                            <p className="text-xl mb-6 text-gray-300">
                                My expertise lies in developing advanced machine learning models, optimizing data pipelines, and extracting meaningful insights from large-scale datasets. I'm particularly interested in natural language processing, computer vision, and reinforcement learning.
                            </p>
                            <p className="text-xl text-gray-300">
                                When I'm not coding or diving into data, you can find me exploring the latest developments in AI, contributing to open-source projects, or sharing my knowledge through technical blog posts and workshops.
                            </p>
                        </div>
                    </Parallax>
                </section>

                {/* Contact Me section */}
                <section className="min-h-screen flex items-center justify-center py-20">
                    <Parallax translateY={[50, 0]} opacity={[0, 1]} startScroll={1100} endScroll={1600}>
                        <div className="text-center">
                            <h2 className="text-6xl font-bold mb-4">Contact Me</h2>
                            <p className="text-xl max-w-xl mx-auto mb-8 text-gray-300">
                                You can reach out to me via the following platforms:
                            </p>
                            <div className="flex flex-col space-y-4 font-mono">
                                <a href="https://github.com/LCKYN" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center justify-center">
                                    <FaGithub className="w-8 h-8" />
                                    <span className="ml-2">https://github.com/LCKYN</span>
                                </a>
                                <a href="https://www.linkedin.com/in/pawarit-thareechan-60b110151/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center justify-center">
                                    <FaLinkedin className="w-8 h-8" />
                                    <span className="ml-2">Pawarit Thareechan</span>
                                </a>
                                <a href="mailto:T.Pawarit@lckyn.com" className="text-gray-300 hover:text-white transition-colors flex items-center justify-center">
                                    <MdAlternateEmail className="w-8 h-8" />
                                    <span className="ml-2">T.Pawarit@lckyn.com</span>
                                </a>
                            </div>
                        </div>
                    </Parallax>
                </section>
            </div>
        </ParallaxProvider>
    );
};

export default IntroPage;
