// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    // Scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById('hero').offsetHeight;
            if (window.scrollY >= heroHeight) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showNavbar ? 'bg-darker shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                {/* Left Side */}
                <a href="#" className="text-primary font-bold text-xl">
                    LCKYN
                </a>

                {/* Right Side */}
                <div className="flex items-center space-x-6">
                    <a href="#about-me" className="text-white hover:text-primary">
                        About Me
                    </a>
                    <a href="#experience" className="text-white hover:text-primary">
                        Experience
                    </a>

                    {/* Hire me! Button with Dropdown */}
                    <div className="relative group">
                        <button className="text-white hover:text-primary focus:outline-none">
                            Hire me!
                        </button>
                        {/* Dropdown Menu */}
                        <div className="absolute right-0 mt-2 w-40 bg-darkGray rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a
                                href="mailto:T.Pawarit@lckyn.com"
                                className="flex items-center px-4 py-2 text-white hover:bg-primary hover:text-darker"
                            >
                                <Mail className="w-4 h-4 mr-2" /> Email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/pawarit-thareechan-60b110151/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 text-white hover:bg-primary hover:text-darker"
                            >
                                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
