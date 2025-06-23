import aboutMeImage from '../assets/img.webp';
import { useCallback } from 'react';

export const AboutSection = () => {
    const handleRipple = useCallback((event) => {
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
    }, []);

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 
                    className="text-3xl md:text-4xl font-bold mb-16 text-center font-display"
                    data-aos="fade-up"
                >
                    About Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div 
                        className="space-y-6"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <h3 className="text-2xl text-primary font-semibold font-display">
                            Passionate Web Developer & Competitive Programmer 
                        </h3>
                        <p className="text-foreground/80 text-left font-body leading-relaxed">
                            Hi, I'm Sampath Kumar Sreeram, a Computer Science Engineering student at Vignan's Institute of Information Technology. I'm deeply passionate about programming and love the thrill of tackling complex problems with logical thinking and creativity.
                        </p>
                        <p className="text-foreground/80 text-left font-body leading-relaxed"> 
                            Constantly curious and driven to learn, I'm always looking for new ways to turn ideas into reality through code. Whether it's exploring new tools or building projects, I enjoy growing a little every day and becoming better at what I do. I'm excited about the future and the opportunities to keep learning and creating.
                        </p>
                        <div 
                            className="flex flex-col sm:flex-row gap-4 pt-6"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <a 
                                href="#contact" 
                                className="cosmic-button ripple glow-hover font-display font-semibold" 
                                onClick={handleRipple}
                            >
                                Get In Touch
                            </a>

                            <a
                                href="/Sampath_Kumar_Sreeram_Resume.pdf"
                                download
                                className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-card-hover ripple font-display font-semibold"
                                onClick={handleRipple}
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div 
                        className="grid grid-cols-1 gap-6"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <img 
                                src={aboutMeImage} 
                                alt="About Me" 
                                className="relative rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/20"
                            />
                        </div>     
                    </div>
                </div>
            </div>
        </section>
    );
};
