import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
    const projects = [
        {
            title: "Online Book Shop with Admin Dashboard",
            description: "This project is a modern, responsive online book shop website built with React, Javacript, Tailwind CSS and MongoDB. It features an admin dashboard for managing books, users, and orders, providing a complete e-commerce solution.",
            techStack: ["React","Tailwind CSS","Javascript","MongoDB","Express.js","Node.js"],
            githubLink: "https://github.com/sampath4292/BOOK_SHOP",
            demoLink: "https://tourist-compass.netlify.app/",
            image: "/Online.png"
        },
        {
            title: "DSA Tracker",
            description: "DSA Tracker is a sleek and user-friendly web application built to help students and programmers systematically track their progress in Data Structures and Algorithms (DSA). Whether you're preparing for coding interviews or improving problem-solving skills, this tracker ensures you stay organized, consistent, and motivated throughout your DSA journey.",
            techStack: ["HTML", "CSS", "JS"],
            githubLink: "https://github.com/sampath4292/dsa-tracker",
            demoLink: "https://track-algo.netlify.app/",
            image: "/DSA.png"
        },
        {
            title: "My Portfolio",
            description: "This project is a modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my skills, projects, achievements, and experience as a Full Stack Developer and Competitive Programmer.",
            techStack: ["React(with Vite)","JavaScript","Tailwind CSS","React Context API"],
            githubLink: "https://github.com/sampath4292/My_Portfolio",
            demoLink: "https://sampathsportfolio.netlify.app/",
            image: "/port_folio.png"
        },
        
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

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 
                    className="text-3xl md:text-4xl font-bold mb-16 text-center font-display"
                    data-aos="fade-up"
                >
                    My Projects
                </h2>
                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-card rounded-xl border border-border/50 shadow-lg group flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} h-full glow-card-hover lift-shadow-hover`}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-delay={index * 200}
                        >
                            {/* Image Side */}
                            <div className="md:w-1/2 flex items-center justify-center p-8">
                                <div className="relative overflow-hidden rounded-xl aspect-video w-full bg-white border border-border/50 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 pointer-events-none rounded-xl group-hover:bg-primary/5 transition-colors duration-300" />
                                </div>
                            </div>
                            {/* Info Side */}
                            <div className="md:w-1/2 flex flex-col justify-center p-8 space-y-6 text-left">
                                <h3 className="text-2xl font-bold text-primary font-display">
                                    {project.title}
                                </h3>
                                <p className="text-foreground/80 font-body leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 py-2">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-2 text-sm rounded-full bg-primary/10 text-primary font-body font-medium hover:bg-primary/20 transition-all duration-300"
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
                                        className="cosmic-button !px-6 !py-3 flex items-center gap-2 ripple glow-hover font-display font-semibold"
                                        onClick={handleRipple}
                                    >
                                        <Github className="h-5 w-5" />
                                        Code
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 glow-hover ripple font-display font-semibold"
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
