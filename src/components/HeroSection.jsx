import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [greetingText, setGreetingText] = useState("");
    const [roleText, setRoleText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [showGreeting, setShowGreeting] = useState(true);
    
    const greetings = ["Hi, I'm", "Welcome to my portfolio", "Have a Nice Day"];
    const roles = ["Full Stack Developer", "Competitive Programmer"];

    // Typing effect for roles
    const typeRole = (text, onComplete) => {
        let currentIndex = 0;
        setIsTyping(true);
        
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setRoleText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
                if (onComplete) onComplete();
            }
        }, 30);

        return () => clearInterval(interval);
    };

    // Effect for animations
    useEffect(() => {
        // Fade out current greeting
        setShowGreeting(false);
        
        const greetingTimeout = setTimeout(() => {
            // Set new greeting text and fade it in
            setGreetingText(greetings[greetingIndex]);
            setShowGreeting(true);
            
            // Start typing role after greeting appears
            setTimeout(() => {
                typeRole(roles[roleIndex]);
            }, 300);
        }, 200);

        return () => clearTimeout(greetingTimeout);
    }, [greetingIndex, roleIndex]);

    // Switch texts sequentially
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTyping) {
                setRoleText("");
                setShowGreeting(false);
                setTimeout(() => {
                    setGreetingIndex((current) => (current + 1) % greetings.length);
                    setRoleIndex((current) => (current + 1) % roles.length);
                }, 200);
            }
        }, 2500);

        return () => clearInterval(interval);
    }, [isTyping]);

    return (
        <section
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
            data-aos="fade-up"
        >
                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div className="space-y-6">
                        <div 
                            className="text-2xl md:text-3xl font-medium tracking-tight mb-4 h-10 font-body"
                            data-aos="fade-down"
                            data-aos-delay="200"
                        >
                            <span 
                                className={`text-foreground inline-block min-h-[1.5em] transition-opacity duration-300 ${
                                    showGreeting ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                {greetingText}
                            </span>
                        </div>
                        <h1 
                            className="text-4xl md:text-6xl font-bold tracking-tight font-display"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                Sampath Kumar Sreeram
                            </span>
                        </h1>

                        <h2 
                            className="text-xl text-primary h-8 mt-6 font-body font-medium"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <span className="inline-block typing-cursor min-h-[1.5em]">
                                {roleText}
                            </span>
                        </h2>

                        <p 
                            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-body leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            I'm a Computer Science student passionate about building creative tech solutions and exploring new ideas.
                        </p>

                        <div 
                            className="pt-8"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                        >
                            <a 
                                href="#projects" 
                                className="cosmic-button glow-hover font-display font-semibold"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                >
                    <span className="text-sm text-foreground/60 mb-2 font-body"> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
        </section>
    );
};

// Add this to your global CSS or tailwind.config.js
/*
@keyframes waving-hand {
  0% { transform: rotate(0.0deg); }
  10% { transform: rotate(14.0deg); }
  20% { transform: rotate(-8.0deg); }
  30% { transform: rotate(14.0deg); }
  40% { transform: rotate(-4.0deg); }
  50% { transform: rotate(10.0deg); }
  60% { transform: rotate(0.0deg); }
  100% { transform: rotate(0.0deg); }
}

@keyframes rubber-band {
  from { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
  to { transform: scale3d(1, 1, 1); }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-waving-hand {
  animation: waving-hand 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

.animate-rubber-band {
  animation: rubber-band 1s ease-in-out;
}

.animate-fade-up {
  animation: fade-up 0.5s ease-out forwards;
}
*/
