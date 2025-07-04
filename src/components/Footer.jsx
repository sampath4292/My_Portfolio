import { Github, Heart, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/sampath4292",
            icon: <Github className="h-5 w-5" />
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/sampath-kumar-sreeram-44b22716b",
            icon: <Linkedin className="h-5 w-5" />
        },
        {
            name: "Email",
            url: "mailto:sampathsriram4292@gmail.com",
            icon: <Mail className="h-5 w-5" />
        }
    ];

    return (
        <footer className="py-12 px-4 border-t border-border/50 bg-card/50">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="flex items-center gap-2 text-foreground/70 font-body">
                        <span>Crafted with</span>
                        <Heart className="h-4 w-4 text-primary fill-current animate-pulse" />
                        <span>and a passion for clean code</span>
                    </div>
                    
                    <div className="flex gap-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-primary/10"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <div className="text-sm text-foreground/60 text-center font-body">
                        <p>Turning coffee into code since 2022</p>
                        <p className="mt-1">© {currentYear} Sampath Kumar. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}; 