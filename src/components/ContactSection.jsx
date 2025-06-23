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
                <h2 
                    className="text-3xl md:text-4xl font-bold mb-6 text-center font-display"
                    data-aos="fade-up"
                >
                    Contact Me
                </h2>
                <p 
                    className="text-foreground/70 text-center mb-16 max-w-2xl mx-auto font-body leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <div 
                    className="flex flex-col sm:flex-row gap-6 mb-12 justify-center items-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    {contactInfo.map((info, idx) => (
                        <div 
                            key={idx} 
                            className="flex items-center gap-4 bg-card rounded-xl border border-border/50 px-6 py-4 w-full sm:w-auto glow-card-hover cursor-pointer hover:scale-105 transition-all duration-300"
                        >
                            <div className="p-2 rounded-lg bg-primary/10">
                                {info.icon}
                            </div>
                            <div className="flex flex-row sm:flex-col gap-1 sm:gap-0 items-center sm:items-start">
                                <div className="text-sm text-foreground/60 whitespace-nowrap font-body">{info.label}</div>
                                <div className="font-medium text-primary whitespace-nowrap font-body">{info.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Links */}
                    <div 
                        className="space-y-8"
                        data-aos="fade-right"
                        data-aos-delay="600"
                    >
                        <div className="flex flex-col gap-8">
                            <h3 className="text-2xl font-semibold text-primary mb-8 font-display">
                                Get in Touch
                            </h3>
                            <div className="bg-card rounded-xl p-8 border border-border/50 shadow-lg">
                                <div className="flex flex-col gap-6">
                                    {contactLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            {...(link.name !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                            className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-all duration-300 group p-4 w-full hover:bg-primary/5 rounded-xl hover:scale-105"
                                        >
                                            <div className="p-3 rounded-xl border border-border/50 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                                                {link.icon}
                                            </div>
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-1 gap-1 sm:gap-0">
                                                <div className="font-medium text-lg font-display">{link.name}</div>
                                                <div className="text-sm text-foreground/60 group-hover:text-primary/80 text-right break-all font-body">{link.text}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div 
                        className="bg-card rounded-xl p-8 border border-border/50 shadow-lg"
                        data-aos="fade-left"
                        data-aos-delay="800"
                    >
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="space-y-6"
                        >
                            <input type="hidden" name="access_key" value="a43f63e6-0712-44ea-8130-7a7ce1c28eaa" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2 font-body">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2 font-body">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body"
                                    placeholder="yourmail@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2 font-body">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none font-body"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full cosmic-button py-3 text-base glow-hover font-display font-semibold"
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
