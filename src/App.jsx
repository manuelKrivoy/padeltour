import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { Footer } from "./components/Footer";

const PadelTournamentLanding = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white">
        <Routes>
          {/* Ruta principal, solo HeroSection */}
          <Route path="/" element={<HeroSection />} />

          {/* Ruta para el resto de las secciones */}
          <Route
            path="/info"
            element={
              <>
                <AboutSection />
                <ScheduleSection />
                <RegistrationSection />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default PadelTournamentLanding;
