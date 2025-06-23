import { Code2, Cloud, Server, Terminal, Braces, Layers } from "lucide-react";

export const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Layers className="h-6 w-6" />,
            skills: ["React.js", "Tailwind CSS","HTML5","CSS3" ,"Javascript" ,"Redux"]
        },
        {
            title: "Backend Development",
            icon: <Server className="h-6 w-6" />,
            skills: ["Node.js", "Express.js","MongoDB","SQL"]
        },
        {
            title: "DevOps & Cloud",
            icon: <Cloud className="h-6 w-6" />,
            skills: ["GitHub","Git","Vercel","Netlify"]
        },
        {
            title: "Coding Languages",
            icon: <Code2 className="h-6 w-6" />,
            skills: ["C","C++","Python","Java"]
        },
        {
            title: "Programming",
            icon: <Terminal className="h-6 w-6" />,
            skills: ["Problem Solving","Data Structures","Algorithms"]
        },
        {
            title: "Others",
            icon: <Braces className="h-6 w-6" />,
            skills: ["Machine Learning","Data Analysis"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 
                    className="text-3xl md:text-4xl font-bold mb-16 text-center font-display"
                    data-aos="fade-up"
                >
                    Skills & Technologies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-border/50 group hover:border-primary/50 glow-card-hover lift-shadow-hover"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-primary p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-primary font-display">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-2 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 font-body font-medium hover:scale-105"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
