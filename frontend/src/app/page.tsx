'use client'
import React from 'react';
import { useScroll, Interpolation } from '@react-spring/web';
import IntroSection from '../components/IntroSection';
import ExperienceSection from '../components/ExperienceSection';
import MaintenanceSection from '../components/MaintenanceSection';

type SpringStyles = {
    opacity: Interpolation<number, 0 | 1>;
    pointerEvents: Interpolation<number, "auto" | "none">;
};

export default function Home() {
    const { scrollY } = useScroll();

    const introStyles: SpringStyles = {
        opacity: scrollY.to([150, 300], [1, 0]),
        pointerEvents: scrollY.to(y => y > 150 ? 'none' : 'auto'),
    };

    const experienceStyles: SpringStyles = {
        opacity: scrollY.to([300, 400, 1000, 1300], [0, 1, 1, 0]),
        pointerEvents: scrollY.to(y => y < 1150 ? 'none' : 'auto'),
    };

    const maintenanceStyles = {
        opacity: scrollY.to([1300, 1700], [0, 1]),
        pointerEvents: scrollY.to(y => y < 1600 ? 'none' : 'auto'),
    };

    return (
        <div className="relative h-[300vh]">
            <div className="h-screen sticky top-0 overflow-hidden fira-code">
                <IntroSection style={introStyles} />
                <ExperienceSection style={experienceStyles} />
                <MaintenanceSection style={maintenanceStyles} />
            </div>
        </div>
    );
}
