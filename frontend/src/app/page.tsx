'use client'
import React from 'react';
import { useScroll } from '@react-spring/web';
import IntroSection from '../components/IntroSection';
import HelloWorldSection from '../components/HelloWorldSection';
import ExperienceSection from '../components/ExperienceSection';

export default function Home() {
    const { scrollY } = useScroll();

    return (
        <div className="relative h-[400vh]">
            <div className="h-screen sticky top-0 overflow-hidden">
                <IntroSection
                    style={{
                        opacity: scrollY.to([0, 300], [1, 0]),
                        pointerEvents: scrollY.to(y => y > 150 ? 'none' : 'auto'),
                    }}
                />
                <ExperienceSection
                    style={{
                        opacity: scrollY.to(
                            [300, 400, 800, 1100],
                            [0, 1, 1, 0]
                        ),
                        pointerEvents: scrollY.to(y => y < 800 ? 'none' : 'auto'),
                    }}
                />
                <HelloWorldSection
                    style={{
                        opacity: scrollY.to(
                            [1100, 1400],
                            [0, 1]
                        ),
                    }}
                />

            </div>
        </div>
    );
}
