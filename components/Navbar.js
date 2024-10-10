// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${showNavbar
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-full pointer-events-none'
                } bg-darker shadow-lg`}
        >
            <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                {/* Left Side */}
                <a href="#" className="text-primary font-bold text-xl md:text-3xl">
                    LCKYN
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Right Side */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#about-me" className="text-white hover:text-primary">
                        About Me
                    </a>
                    <a href="#experience" className="text-white hover:text-primary">
                        Experience
                    </a>

                    {/* Hire me! Button with Dropdown */}
                    <div className="relative group">
                        <button className="text-white hover:text-primary focus:outline-none appearance-none">
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

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-darker">
                    <a
                        href="#about-me"
                        className="block px-4 py-2 text-white hover:bg-primary"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        About Me
                    </a>
                    <a
                        href="#experience"
                        className="block px-4 py-2 text-white hover:bg-primary"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Experience
                    </a>
                    {/* Hire Me Options */}
                    <div className="border-t border-darkGray">
                        <a
                            href="mailto:T.Pawarit@lckyn.com"
                            className="block px-4 py-2 text-white hover:bg-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Mail className="inline w-4 h-4 mr-2" /> Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pawarit-thareechan-60b110151/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-white hover:bg-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Linkedin className="inline w-4 h-4 mr-2" /> LinkedIn
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
