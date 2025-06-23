import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  // { name: "Experience", href: "#experience" },
  // { name: "Education", href: "#education" },
  { name: "Coding Profiles", href: "#coding-profiles" },
  // { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      
      // Add background when scrolled
      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of your fixed navbar
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

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
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-out",
        isScrolled 
          ? "py-3 bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" 
          : "py-5 bg-background/80 backdrop-blur-sm",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center font-display hover:scale-105 transition-transform duration-300"
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Sampath's </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={(e) => { handleRipple(e); scrollToSection(item.href); }}
              className="text-foreground/80 hover:text-primary transition-all duration-300 ripple font-body font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <div className="border-l border-border/50 pl-6">
            <ThemeToggle />
          </div>
        </div>

        {/* mobile/tablet nav controls */}
        <div className="flex items-center gap-6 lg:hidden">
          <button
            onClick={(e) => { handleRipple(e); setIsOpen(!isOpen); }}
            className="p-2 text-foreground z-50 ripple hover:text-primary transition-colors duration-300"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="border-l border-border/50 pl-6">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 lg:hidden",
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => { handleRipple(e); scrollToSection(item.href); }}
                className="text-foreground/80 hover:text-primary transition-all duration-300 ripple font-body font-medium hover:scale-110"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
