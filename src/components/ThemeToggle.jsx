import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme.jsx";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-primary transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Sun className="w-5 h-5 text-primary transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
};
