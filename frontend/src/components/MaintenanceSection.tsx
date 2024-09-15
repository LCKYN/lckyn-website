import React from 'react';
import { animated, Interpolation } from '@react-spring/web';
import { FaTools } from 'react-icons/fa';

interface MaintenanceSectionProps {
    style: {
        opacity: Interpolation<number, 0 | 1>;
        pointerEvents: Interpolation<number, "auto" | "none">;
    };
}

const MaintenanceSection: React.FC<MaintenanceSectionProps> = ({ style }) => (
    <animated.section
        style={style}
        className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white"
    >
        <div className="text-center">
            <FaTools className="text-6xl mb-4 mx-auto text-yellow-400" />
            <h1 className="text-5xl font-bold mb-4 select-none cursor-default">Under Maintenance</h1>
            <p className="text-xl select-none cursor-default">
                We&apos;re working on updating this section. Check back soon for new information!
            </p>
        </div>
    </animated.section>
);

export default MaintenanceSection;
