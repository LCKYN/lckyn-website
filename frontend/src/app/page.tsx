'use client'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useScroll, animated } from '@react-spring/web';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

export default function Home() {
    const { scrollY } = useScroll();
    const [hasMore, setHasMore] = useState(true); // To control infinite scrolling

    const fetchMoreData = () => {
        setHasMore(false); // Load more content logic here, for demo purposes we stop loading after one fetch
    };

    return (
        <InfiniteScroll
            dataLength={1} // The number of items currently rendered
            next={fetchMoreData} // Function to load more data
            hasMore={hasMore} // Whether to keep scrolling
            loader={<h4>Loading...</h4>} // Loader while fetching more content
            scrollableTarget="scrollableDiv"
        >
            <div className="relative h-screen">
                {/* Intro Section */}
                <animated.div
                    style={{
                        opacity: scrollY.to([200, 600], [1, 0]), // Fade out between 200px and 600px
                        position: 'fixed', // Keep the section fixed in the viewport
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)', // Center the content vertically and horizontally
                    }}
                    className="w-full flex items-center justify-center bg-gray-900 text-white"
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
                </animated.div>

                {/* Hello World Section */}
                <animated.div
                    style={{
                        opacity: scrollY.to([400, 800], [0, 1]), // Fade in between 400px and 800px
                        position: 'fixed', // Keep the section fixed in the viewport
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)', // Center the content vertically and horizontally
                    }}
                    className="w-full flex items-center justify-center bg-gray-900 text-white"
                >
                    <div className="text-center">
                        <h1 className="text-7xl">Hello World</h1>
                    </div>
                </animated.div>

                {/* Spacer to enable scrolling */}
                <div style={{ height: '200vh' }} />
            </div>
        </InfiniteScroll>
    );
}
