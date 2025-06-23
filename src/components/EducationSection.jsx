import { GraduationCap, Calendar } from "lucide-react";

export const EducationSection = () => {
    const education = [
        {
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "Vignan's Institute of InformationTechnology",
            duration: "2022 - 2026",
            gpa: "8.7"
        }
    ];

    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Education
                </h2>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div 
                            key={index}
                            className="bg-card rounded-lg p-6 mb-6 shadow-md border border-border group glow-card-hover hover:border-primary transition-all hover:shadow-xl"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2 group-hover:scale-105 transition-transform">
                                <GraduationCap className="h-5 w-5" />
                                {edu.degree}
                            </h3>
                            <div className="text-muted-foreground mb-2 flex items-center gap-2 group-hover:text-primary/80 transition-colors">
                                {edu.institution}
                            </div>
                            <div className="text-muted-foreground mb-2 flex items-center gap-2 group-hover:text-primary/80 transition-colors">
                                <Calendar className="h-4 w-4" />
                                {edu.duration}
                            </div>
                            <div className="text-muted-foreground mb-2 flex items-center gap-2">
                                CGPA: <span className="text-primary flex items-center gap-2 group-hover:scale-110 transition-transform">{edu.gpa}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
