import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme.jsx";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-5 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors z-50"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-primary" />
      ) : (
        <Sun className="w-5 h-5 text-primary" />
      )}
    </button>
  );
};
