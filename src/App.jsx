import React from "react";

import { portfolioData } from "./constants";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header profile={portfolioData.profile} />

      <main>
        <ProfileSection
          profile={portfolioData.profile}
          qualifications={portfolioData.qualifications}
        />
        <AboutSection about={portfolioData.about} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
      </main>

      <Footer profile={portfolioData.profile} />
    </div>
  );
};

export default App;
