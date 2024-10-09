// components/sections/Experience.js
export const Experience = () => (
    <div className="space-y-8">
        <ExperienceBlock
            title="Senior Developer"
            company="Company Name"
            period="2020 - Present"
            description="Led development of multiple high-impact projects, implementing
                       modern technologies and best practices. Managed team of 5 developers
                       and improved project delivery time by 40%."
        />
        <ExperienceBlock
            title="Full Stack Developer"
            company="Previous Company"
            period="2018 - 2020"
            description="Developed and maintained various web applications using React,
                       Node.js, and PostgreSQL. Collaborated with design team to implement
                       responsive and accessible user interfaces."
        />
    </div>
);

const ExperienceBlock = ({ title, company, period, description }) => (
    <div className="space-y-2">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-gray">{company} | {period}</p>
        <p>{description}</p>
    </div>
);
