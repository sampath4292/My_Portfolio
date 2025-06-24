import { ThemeToggle } from "../components/ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { BubblesBackground } from '../components/BubblesBackground';
import { LightThemeBackground } from '../components/LightThemeBackground';
import { Navbar} from '../components/Navbar';
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { EducationSection } from "../components/EducationSection";
import { CodingProfilesSection } from "../components/CodingProfilesSection";
import { AchievementsSection } from "../components/AchievementsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ShapesBackground } from '../components/ShapesBackground';

export const Home = () => {
    const { theme } = useTheme();
    return (
        <div className="min-h-screen">
            {/*Background Effects */}
            <ShapesBackground theme={theme} />
            {/* NavBar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <EducationSection />
                <CodingProfilesSection />
                <AchievementsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};