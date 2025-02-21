import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { Footer } from "./components/Footer";
import { TestimonialsSection } from "./components/TestimonialsSection";

const PadelTournamentLanding = () => {
  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <TestimonialsSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default PadelTournamentLanding;
