// src/components/HelloWorldSection.tsx
import React from 'react';
import { animated, Interpolation } from '@react-spring/web';

interface HelloWorldSectionProps {
    style: {
        opacity: Interpolation<number, 0 | 1>;
        pointerEvents: Interpolation<number, "auto" | "none">;
    };
}

const HelloWorldSection: React.FC<HelloWorldSectionProps> = ({ style }) => (
    <animated.section
        style={style}
        className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white"
    >
        <div className="text-center">
            <h1 className="text-7xl select-none cursor-default">Hello World</h1>
        </div>
    </animated.section>
);

export default HelloWorldSection;
