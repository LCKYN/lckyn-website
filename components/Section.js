// components/Section.js
import React from 'react';

const Section = ({
    id,
    title,
    children,
    className = '',
    showDivider = true,
    titleClassName = 'text-primary',
}) => (
    <section
        id={id}
        className={`w-full max-w-4xl mx-auto px-4 mb-16 min-h-60 flex flex-col justify-center ${className}`}
    >
        {title && (
            <h2 className={`text-3xl font-bold text-center mb-8 ${titleClassName}`}>
                {title}
            </h2>
        )}
        <div className="text-white">{children}</div>
        {showDivider && (
            <div className="mt-16 border-b border-darkGray w-full"></div>
        )}
    </section>
);

export default Section;
