"use client";

import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import styles from './IntroPage.module.css'; // Import CSS module

const IntroPage: React.FC = () => {
    return (
        <ParallaxProvider>
            <div className={`h-[200vh] bg-gray-900 text-white overflow-hidden ${styles.noScrollbar}`}>
                {/* First section */}
                <div className="h-screen flex items-center justify-center sticky top-0">
                    {/* Keep the parallax effect, but adjust translateY and opacity to have smoother transitions */}
                    <Parallax translateY={[0, -5]} opacity={[1, 0]} startScroll={100} endScroll={400} className="text-center fixed inset-0 flex items-center justify-center">
                        <div>
                            <h1 className="text-8xl font-bold mb-4">
                                It's me, the <span className="text-blue-400">LCKYN</span>
                            </h1>
                            <p className="text-xl max-w-xl mx-auto mb-8 text-gray-300">
                                I work on transforming complex data into actionable insights and developing cutting-edge machine learning solutions.
                            </p>
                        </div>
                    </Parallax>
                </div>

                <div className="relative h-screen flex items-center justify-center">
                    {/* "LCKYN" at the top left - always fixed */}
                    <div className="fixed top-4 left-4 text-white text-3xl font-bold">
                        <Parallax opacity={[0, 1]} startScroll={500} endScroll={800}>
                            LCKYN
                        </Parallax>
                    </div>

                    {/* Parallax effect for the content */}
                    <Parallax translateY={[30, 0]} opacity={[0, 1]} startScroll={350} endScroll={800} className="text-center fixed inset-0 flex items-center justify-center">
                        <div>
                            <h2 className="text-6xl font-bold mb-4">Contact Me</h2>
                            <p className="text-xl max-w-xl mx-auto mb-8 text-gray-300">
                                You can reach out to me via the following platforms:
                            </p>
                            <div className="flex flex-col space-y-4 font-mono">
                                {/* GitHub */}
                                <a href="https://github.com/LCKYN" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center">
                                    <FaGithub className="w-8 h-8" /> {/* GitHub icon from react-icons */}
                                    <span className="ml-2">https://github.com/LCKYN</span>
                                </a>
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/pawarit-thareechan-60b110151/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center">
                                    <FaLinkedin className="w-8 h-8" /> {/* LinkedIn icon from react-icons */}
                                    <span className="ml-2">Pawarit Thareechan</span>
                                </a>
                                {/* Email */}
                                <a href="mailto:T.Pawarit@lckyn.com" className="text-gray-300 hover:text-white transition-colors flex items-center">
                                    <MdAlternateEmail className="w-8 h-8" /> {/* Email icon from react-icons */}
                                    <span className="ml-2">T.Pawarit@lckyn.com</span>
                                </a>
                            </div>
                        </div>
                    </Parallax>
                </div>

            </div>
        </ParallaxProvider>
    );
};

export default IntroPage;
