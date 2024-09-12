'use client'
import { FaTerminal, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useScroll, animated } from '@react-spring/web';

export default function Home() {
    const { scrollY } = useScroll();

    return (
        <div className="relative">
            {/* Intro Section */}
            <animated.section
                style={{
                    opacity: scrollY.to([0, 400], [1, 0]),
                }}
                className="h-screen flex items-center justify-center bg-gray-900 text-white sticky top-0"
            >
                <div className="border-2 border-blue-500 rounded p-8 max-w-4xl w-full mx-4 shadow-lg bg-gray-800">
                    <div className="text-center font-mono">
                        <h1 className="text-7xl font-light mb-4">
                            It's me, the <span className="text-blue-400 font-bold">LCKYN</span>
                        </h1>
                        <p className="text-lg max-w-xl mx-auto mb-8 text-gray-300">
                            Data Scientist and Machine Learning Engineer
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a href="https://github.com/LCKYN" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="mailto:T.Pawarit@lckyn.com" className="text-gray-400 hover:text-white transition-colors">
                                <FaEnvelope size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/pawarit-thareechan-60b110151/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </animated.section>

            {/* Hello World Section */}
            <animated.section
                style={{
                    opacity: scrollY.to([400, 800], [0, 1]),
                }}
                className="h-screen flex items-center justify-center bg-gray-900 text-white sticky top-0"
            >
                <div className="text-center">
                    <h1 className="text-7xl">Hello World</h1>
                </div>
            </animated.section>

            {/* Spacer to allow scrolling */}
            <div style={{ height: '200vh' }}></div>
        </div>
    );
}
