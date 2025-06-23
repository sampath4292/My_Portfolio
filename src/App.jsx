import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { useTheme } from "./hooks/useTheme";
import { BubblesBackground } from "./components/BubblesBackground";
import { LightThemeBackground } from "./components/LightThemeBackground";
import { ThemeToggle } from "./components/ThemeToggle";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";

function App() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // if (isLoading) {
  //   return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  // }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {theme === 'light' ? <LightThemeBackground /> : <BubblesBackground />}
      <ThemeToggle />
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
