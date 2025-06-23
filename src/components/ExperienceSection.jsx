import { Calendar, Building2, Star } from "lucide-react";

const GlowyStar = ({ className = "" }) => (
    <div className={`w-8 h-8 flex items-center justify-center ${className}`}>
        <div className="relative">
            <Star className="w-6 h-6 text-primary z-10 relative" />
            <div className="absolute inset-0 rounded-full bg-white opacity-60 blur-[6px] z-0" />
        </div>
    </div>
);

export const ExperienceSection = () => {
    const experiences = [
        {
            title: "ML Intern",
            company: "SAP, AICTE, INDIA",
            duration: "JANUARY 2025",
            responsibilities: [
                "Developed a AI Resume ranker using Python inbuilt functions, which helps to predict the rank of a resume based on the job description.",
            ]
        },
        
    ];

    return (
        <section id="experience" className="py-24 px-2 sm:px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Experience
                </h2>
                <div className="relative flex flex-col items-center w-full fade-in-up lift-shadow-hover">
                    <div className="w-full flex flex-col relative">
                        {/* Single vertical dotted line: left on mobile, center on md+ */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-0 md:-translate-x-1/2 border-l-2 border-dotted border-primary/40 z-0" />
                        {experiences.map((exp, index) => (
                            <div key={index} className="w-full flex items-start min-h-[80px] relative z-10">
                                {/* Left side (card or empty) for zig-zag on md+, single column on mobile */}
                                {index % 2 === 0 ? (
                                    <div className="hidden md:flex w-1/2 justify-end pr-2 sm:pr-6">
                                        <div className="bg-card rounded-lg p-6 mb-6 shadow-md border border-border w-full max-w-md group glow-card-hover hover:border-primary transition-all">
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-xl font-semibold text-primary group-hover:scale-105 transition-transform">
                                                    {exp.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary/80 transition-colors">
                                                    <Building2 className="h-4 w-4" />
                                                    <span>{exp.company}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary/80 transition-colors">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{exp.duration}</span>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-left">
                                                    {exp.responsibilities.map((resp, respIndex) => (
                                                        <li key={respIndex} className="pl-2 group-hover:text-foreground transition-colors">{resp}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="hidden md:flex w-1/2" />
                                )}
                                {/* Center: star only (no per-item line) */}
                                <div className="flex flex-col items-center justify-start min-h-full z-20 md:w-auto w-12">
                                    <GlowyStar className="group" />
                                </div>
                                {/* Right side (card or empty) for zig-zag on md+, single column on mobile */}
                                {index % 2 !== 0 ? (
                                    <div className="hidden md:flex w-1/2 justify-start pl-2 sm:pl-6">
                                        <div className="bg-card rounded-lg p-6 mb-6 shadow-md border border-border w-full max-w-md group glow-card-hover hover:border-primary transition-all">
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-xl font-semibold text-primary group-hover:scale-105 transition-transform">
                                                    {exp.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary/80 transition-colors">
                                                    <Building2 className="h-4 w-4" />
                                                    <span>{exp.company}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary/80 transition-colors">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{exp.duration}</span>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-left">
                                                    {exp.responsibilities.map((resp, respIndex) => (
                                                        <li key={respIndex} className="pl-2 group-hover:text-foreground transition-colors">{resp}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="hidden md:flex w-1/2" />
                                )}
                                {/* Mobile: always show card full width */}
                                <div className="flex md:hidden flex-1">
                                    <div className="bg-card rounded-lg p-6 mb-6 shadow-md border border-border w-full group glow-card-hover hover:border-primary transition-all">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-xl font-semibold text-primary group-hover:scale-105 transition-transform">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary/80 transition-colors">
                                                <Building2 className="h-4 w-4" />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary/80 transition-colors">
                                                <Calendar className="h-4 w-4" />
                                                <span>{exp.duration}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-left">
                                                {exp.responsibilities.map((resp, respIndex) => (
                                                    <li key={respIndex} className="pl-2 group-hover:text-foreground transition-colors">{resp}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
