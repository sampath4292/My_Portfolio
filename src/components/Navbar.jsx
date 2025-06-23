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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    const offset = 80; // Height of your fixed navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
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
        "fixed w-full z-40 transition-all duration-300 fade-in-up",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="w-full max-w-7xl ml-0 px-4 flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
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
              className="text-foreground/80 hover:text-primary transition-colors duration-300 ripple"
            >
              {item.name}
            </button>
          ))}
          <div className="border-l border-border pl-6">
            <ThemeToggle />
          </div>
        </div>

        {/* mobile/tablet nav controls */}
        <div className="flex items-center gap-6 lg:hidden">
          <button
            onClick={(e) => { handleRipple(e); setIsOpen(!isOpen); }}
            className="p-2 text-foreground z-50 ripple"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="border-l border-border pl-6">
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
                className="text-foreground/80 hover:text-primary transition-colors duration-300 ripple"
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
