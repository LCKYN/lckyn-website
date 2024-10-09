// components/sections/Contact.js
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => (
    <div className="grid md:grid-cols-2 gap-8">
        <ContactBlock
            title="Get In Touch"
            items={[
                {
                    icon: <Mail className="w-5 h-5" />,
                    text: "T.Pawarit@lckyn.com",
                    link: "mailto:T.Pawarit@lckyn.com"
                },
                {
                    icon: <Phone className="w-5 h-5" />,
                    text: "(+66)83-028-2014",
                    link: "tel:(+66)830282014"
                },
                {
                    icon: <MapPin className="w-5 h-5" />,
                    text: "Bangkok, Thailand",
                    link: "https://maps.app.goo.gl/oP1DSVR3VRPM1Hae8"
                }
            ]}
        />
        <ContactBlock
            title="Social Media"
            items={[
                {
                    icon: <Github className="w-5 h-5" />,
                    text: "@LCKYN",
                    link: "https://github.com/LCKYN"
                },
                {
                    icon: <Linkedin className="w-5 h-5" />,
                    text: "/in/Pawarit Thareechan",
                    link: "https://www.linkedin.com/in/pawarit-thareechan-60b110151/"
                }
            ]}
        />
    </div>
);

const ContactBlock = ({ title, items }) => (
    <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <div className="space-y-3">
            {items.map((item, index) => (
                <ContactItem key={index} {...item} />
            ))}
        </div>
    </div>
);

const ContactItem = ({ icon, text, link }) => {
    const content = (
        <div className="flex items-center space-x-3 text-white hover:text-primary transition-colors">
            {icon}
            <span>{text}</span>
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
