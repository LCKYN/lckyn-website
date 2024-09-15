// frontend/src/components/IntroSection.tsx
import React from 'react';
import { animated } from '@react-spring/web';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

interface IntroSectionProps {
    style: React.CSSProperties;
}

const IntroSection: React.FC<IntroSectionProps> = ({ style }) => (
    <animated.section
        style={style}
        className="absolute inset-0 flex flex-col items-center justify-between bg-gray-900 text-gray-100 z-10"
    >
        <div className="flex-grow flex items-center justify-center w-full">
            <div className="border-2 border-blue-400 rounded p-8 max-w-4xl w-full mx-4 shadow-lg bg-gray-800">
                <div className="text-center font-mono">
                    <h1 className="text-7xl font-light mb-4 select-none cursor-default">
                        It's me, the <span className="text-blue-400 font-bold">LCKYN</span>
                    </h1>
                    <p className="text-lg max-w-xl mx-auto mb-8 text-gray-300 select-none cursor-default">
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
        </div>
        <div className="w-full text-center py-4 select-none cursor-default fira-code">
            <p className="text-sm text-gray-400">
            Here is my weekend project, built from the dust. This humble beginning in web development is my canvas to introduce you to LCKYN. It's a glimpse into who I am and what I can create, and I'm excited to share it with you.
            </p>
        </div>
    </animated.section>
);

export default IntroSection;
