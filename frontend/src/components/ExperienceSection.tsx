import React, { useEffect, useState } from 'react';
import { animated, useSpring, Interpolation } from '@react-spring/web';
import { FaPython, FaReact, FaNode, FaDocker, FaDiscord } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
    SiTypescript,
    SiPytorch,
    SiPandas,
    SiScikitlearn,
    SiApachespark,
    SiApachesuperset,
    SiMinio,
    SiTensorflow,
    SiFlask
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { ClipLoader } from 'react-spinners';

// Import the custom CSS file
import './ExperienceSection.css';

interface Experience {
    id: string;
    name: string;
    language: string[];
    tools: string[];
    description: string;
}

interface ExperienceSectionProps {
    style: {
        opacity: Interpolation<number, 0 | 1>;
        pointerEvents: Interpolation<number, "auto" | "none">;
    };
}

const languageIcons: { [key: string]: JSX.Element } = {
    python: <FaPython />,
    javascript: <IoLogoJavascript />,
    typescript: <SiTypescript />,
    sql: <BsFiletypeSql />,
};

const getLanguageIcon = (language: string) => {
    return languageIcons[language.toLowerCase()] || null;
};

const toolIcons: { [key: string]: JSX.Element } = {
    'pytorch': <SiPytorch />,
    'TensorFlow': <SiTensorflow />,
    'pandas': <SiPandas />,
    'react': <FaReact />,
    'node.js': <FaNode />,
    'scikit-learn': <SiScikitlearn />,
    'apache spark': <SiApachespark />,
    'apache superset': <SiApachesuperset />,
    'minio': <SiMinio />,
    'docker': <FaDocker />,
    'flask': <SiFlask />,
    'PostgreSQL': <BiLogoPostgresql />,
    'Discord API': <FaDiscord />,
};

const getToolIcon = (tool: string) => {
    return toolIcons[tool.toLowerCase()] || null;
};

const ExperienceBox: React.FC<{ experience: Experience }> = ({ experience }) => {
    const [hovered, setHovered] = useState(false);

    const hoverAnimation = useSpring({
        transform: hovered ? 'translateY(-5px)' : 'translateY(0px)',
        boxShadow: hovered
            ? '0px 10px 20px rgba(0, 0, 0, 0.2)'
            : '0px 4px 6px rgba(0, 0, 0, 0.1)',
    });

    return (
        <animated.div
            style={hoverAnimation}
            className="bg-gray-800 p-6 rounded-xl cursor-pointer transition-all duration-300 ease-in-out h-full flex flex-col fira-code border border-gray-700"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <h3 className="text-2xl font-semibold mb-2">{experience.name}</h3>
            <div className="border-t border-gray-700 my-2"></div>
            <p className="text-base text-gray-300 mb-4 flex-grow">{experience.description}</p>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <span className="text-sm mr-2 font-medium">Languages:</span>
                    <div className="flex">
                        {experience.language.map((lang) => {
                            const icon = getLanguageIcon(lang);
                            return icon && (
                                <div
                                    key={lang}
                                    className="text-2xl mr-2 text-blue-400"
                                    title={lang}
                                >
                                    {icon}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-sm mr-2 font-medium">Tools:</span>
                    <div className="flex flex-wrap">
                        {experience.tools.map((tool) => {
                            const icon = getToolIcon(tool);
                            return icon && (
                                <div
                                    key={tool}
                                    className="text-2xl mr-2 text-green-400"
                                    title={tool}
                                >
                                    {icon}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </animated.div>
    );
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ style }) => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchExperiences = async () => {
            try {
                const timestamp = new Date().getTime();
                const response = await fetch(`https://raw.githubusercontent.com/LCKYN/LCKYN/main/Experience.json?cb=${timestamp}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (isMounted) {
                    setExperiences(data);
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    if (isMounted) {
                        setError(error.message);
                    }
                }
                else if (isMounted) {
                    setError(String(error)); // In case the error is not an instance of Error
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchExperiences();

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return (
            <animated.section
                style={style}
                className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white"
            >
                <ClipLoader color="#4A90E2" size={50} />
            </animated.section>
        );
    }

    if (error) {
        return (
            <animated.section
                style={style}
                className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white"
            >
                <div className="text-xl mb-4">Error: {error}</div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition-colors"
                >
                    Retry
                </button>
            </animated.section>
        );
    }

    return (
        <animated.section
            style={style}
            className="absolute inset-0 flex flex-col items-center justify-start bg-gray-900 text-white overflow-y-auto hide-scrollbar fira-code"
        >
            <h2 className="text-5xl font-bold my-12">Experience</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-8">
                {experiences.map((exp) => (
                    <ExperienceBox key={exp.id} experience={exp} />
                ))}
            </div>
        </animated.section>
    );
};

export default ExperienceSection;
