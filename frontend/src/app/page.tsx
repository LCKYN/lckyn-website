'use client'
import { FaTerminal, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Home() {
    return (
        <section className="h-screen flex items-center justify-center sticky top-0 bg-gray-900 text-white select-none">
            <div className="border-2 border-blue-500 rounded-lg p-8 max-w-2xl w-full mx-4 shadow-lg bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                    <FaTerminal className="text-gray-400" />
                </div>
                <div className="text-center font-mono">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                        It's me, the <span className="text-blue-400">LCKYN</span>
                    </h1>
                    <p className="text-lg sm:text-xl max-w-xl mx-auto mb-8 text-gray-300">
                        Data Scientist and Machine Learning Engineer
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <FaEnvelope size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
