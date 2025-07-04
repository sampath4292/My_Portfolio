import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { useTheme } from "./hooks/useTheme";
import { BubblesBackground } from "./components/BubblesBackground";
import { LightThemeBackground } from "./components/LightThemeBackground";
import { ThemeToggle } from "./components/ThemeToggle";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState, useEffect } from "react";

function App() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Initialize AOS
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0,
      });
    }
  }, []);

  // if (isLoading) {
  //   return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  // }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
