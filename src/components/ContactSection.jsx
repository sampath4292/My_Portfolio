import { Github, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";

export const ContactSection = () => {
    const contactLinks = [
        {
            name: "Email",
            url: "mailto:sampathsriram4292@gmail.com",
            icon: <Mail className="h-6 w-8" />,
            text: "sampathsriram4292@gmail.com"
        },
        {
            name: "GitHub",
            url: "https://github.com/sampath4292",
            icon: <Github className="h-6 w-8" />,
            text: "github.com/sampath4292"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/sampath-kumar-sreeram-44b22716b/",
            icon: <Linkedin className="h-6 w-8" />,
            text: "www.linkedin.com/in/sampath-kumar-sreeram"
        }
    ];

    const contactInfo = [
        {
            icon: <MapPin className="h-6 w-6 text-primary" />,
            label: "Location",
            value: "Visakhapatnam, India"
        },
        {
            icon: <Phone className="h-6 w-6 text-primary" />,
            label: "Phone",
            value: "+91 87120 08890"
        },
        {
            icon: <Clock className="h-6 w-6 text-primary" />,
            label: "Quick Response",
            value: "Within 24 hours"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Contact Me
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center items-center">
                    {contactInfo.map((info, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-card rounded-lg border border-border px-4 py-3 w-full sm:w-auto glow-card-hover cursor-pointer">
                            {info.icon}
                            <div className="flex flex-row sm:flex-col gap-2 sm:gap-0 items-center sm:items-start">
                                <div className="text-sm text-muted-foreground whitespace-nowrap">{info.label}</div>
                                <div className="font-medium text-primary whitespace-nowrap">{info.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Links */}
                    <div className="space-y-8">
                        <div className="flex flex-col gap-8">
                            <h3 className="text-2xl font-semibold text-primary mb-8">
                                Get in Touch
                            </h3>
                            <div className="bg-card rounded-lg p-8 border border-border">
                                <div className="flex flex-col gap-6">
                                    {contactLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            {...(link.name !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group p-4 w-full hover:bg-primary/5 rounded-lg"
                                        >
                                            <div className="p-0 rounded-xl border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                                                {link.icon}
                                            </div>
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-1 gap-1 sm:gap-0">
                                                <div className="font-medium text-lg">{link.name}</div>
                                                <div className="text-sm text-muted-foreground group-hover:text-primary/80 text-right break-all">{link.text}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card rounded-lg p-8 border border-border">
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="space-y-6"
                        >
                            <input type="hidden" name="access_key" value="a43f63e6-0712-44ea-8130-7a7ce1c28eaa" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="yourmail@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full cosmic-button py-3 text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
