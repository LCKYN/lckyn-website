// components/sections/Footer.js
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Footer = () => (
    <footer className="bg-darkest text-white fixed bottom-0 left-0 w-full">
        <div className="max-w-4xl mx-auto px-4 py-2">
            <div className="grid md:grid-cols-2 gap-4">
                <ContactBlock
                    title="Get In Touch"
                    items={[
                        {
                            icon: <Mail className="w-5 h-5" />,
                            text: "T.Pawarit@lckyn.com",
                            link: "mailto:T.Pawarit@lckyn.com",
                        },
                        {
                            icon: <Phone className="w-5 h-5" />,
                            text: "(+66)83-028-2014",
                            link: "tel:(+66)830282014",
                        },
                        {
                            icon: <MapPin className="w-5 h-5" />,
                            text: "Bangkok, Thailand",
                            link: "https://maps.app.goo.gl/oP1DSVR3VRPM1Hae8",
                        },
                    ]}
                />
                <ContactBlock
                    title="Social Media"
                    items={[
                        {
                            icon: <Github className="w-5 h-5" />,
                            text: "@LCKYN",
                            link: "https://github.com/LCKYN",
                        },
                        {
                            icon: <Linkedin className="w-5 h-5" />,
                            text: "/in/Pawarit Thareechan",
                            link: "https://www.linkedin.com/in/pawarit-thareechan-60b110151/",
                        },
                    ]}
                />
            </div>
            <p className="text-gray text-sm italic text-center leading-snug mt-4">
                Here is my weekend project, built from the dust. This humble beginning in web development
                is my canvas to introduce you to LCKYN. It's a glimpse into who I am and what I can create,
                and I'm excited to share it with you.
            </p>
        </div>
    </footer>
);

const ContactBlock = ({ title, items }) => (
    <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <div className="space-y-1">
            {items.map((item, index) => (
                <ContactItem key={index} {...item} />
            ))}
        </div>
    </div>
);

const ContactItem = ({ icon, text, link }) => {
    const content = (
        <div className="flex items-center space-x-2 text-white hover:text-primary transition-colors">
            {icon}
            <span className="text-sm">{text}</span>
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
};
