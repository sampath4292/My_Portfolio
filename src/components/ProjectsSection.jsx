import { Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";

export const ProjectsSection = () => {
    const projects = [
        {
            title: "DSA Tracker",
            description: "",
            techStack: ["Python", "Machine Learning", "Streamlit","Data Analysis"],
            githubLink: "https://github.com/Geethanjali37/PREDICTION-OF-DISEASE-OUTBREAKS",
            demoLink: "https://nvs4thmv67633kwhmjmsxu.streamlit.app/",
            image: "/dp.png"
        },
        {
            title: "My Portfolio",
            description: "This project is a modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my skills, projects, achievements, and experience as a Full Stack Developer and Competitive Programmer.",
            techStack: ["React(with Vite)","TypeScript","Tailwind CSS","React Context API"],
            githubLink: "https://github.com/Geethanjali37/My-Portfolio",
            demoLink: "https://geethanjalir-portfolio.netlify.app/",
            image: "/my-portfolio.png"
        },
        {
            title: "Tourist Compass",
            description: "Tourist Compass is a responsive, user-friendly travel guide website that helps users explore popular tourist destinations across India. Built using HTML, CSS, and JavaScript, this project presents a beautifully designed platform to browse through iconic locations categorized by region",
            techStack: ["HTML5","CSS3","Javascript"],
            githubLink: "https://github.com/Geethanjali37/Tourist-Compass",
            demoLink: "https://tourist-compass.netlify.app/",
            image: "/touristcompass.png"
        },
        {
            title: "Safe Streets",
            description: "SafeStreets is a modern, responsive transportation service website built with HTML, CSS, and JavaScript. This project provides a clean and functional platform that showcases essential travel-related services",
            techStack: ["HTML5","CSS3","Javascript"],
            githubLink: "https://github.com/Geethanjali37/SafeStreets",
            demoLink: "https://safestreets.netlify.app/",
            image: "/safestreets.png"
        },{
            title: "OptiStyle",
            description: "This project is a modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my skills, projects, achievements, and experience as a Full Stack Developer and Competitive Programmer.",
            techStack: ["HTML5","CSS3","Javascript"],
            githubLink: "https://github.com/Geethanjali37/Optistyle",
            demoLink: "https://opti-style.netlify.app/",
            image: "/os.png"
        }
    ];

    const handleRipple = (event) => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = event.currentTarget.getBoundingClientRect();
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;
        ripple.style.width = `${rect.width}px`;
        ripple.style.height = `${rect.height}px`;
        event.currentTarget.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 500);
    };

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );
        document.querySelectorAll('.fade-in-up').forEach((el) => {
            observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My Projects
                </h2>
                <div className="flex flex-col gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-card rounded-xl border border-border shadow-md group flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} h-full glow-card-hover lift-shadow-hover fade-in-up`}
                        >
                            {/* Image Side */}
                            <div className="md:w-1/2 flex items-center justify-center p-6">
                                <div className="relative overflow-hidden rounded-lg aspect-video w-full bg-white border border-border flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_24px_4px_rgba(139,92,246,0.3)]"
                                    />
                                    <div className="absolute inset-0 pointer-events-none rounded-lg group-hover:bg-primary/10 transition-colors duration-300" />
                                </div>
                            </div>
                            {/* Info Side */}
                            <div className="md:w-1/2 flex flex-col justify-center p-6 space-y-4 text-left">
                                <h3 className="text-2xl font-bold text-primary">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 py-2">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-4 flex-wrap">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-button !px-6 !py-2 flex items-center gap-2 ripple"
                                        onClick={handleRipple}
                                    >
                                        <Github className="h-5 w-5" />
                                        Code
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors flex items-center gap-2 glow-hover ripple"
                                        onClick={handleRipple}
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
