import React from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import AboutSection from './components/AboutSection';
import SkillTree from './components/SkillTree';
import {skills} from './data/skills';
import ProjectsSection from './components/ProjectSections';
function App() {

  return (
    <div className="App">
      <Header/>
      <Section1/>
      <AboutSection/>
      <SkillTree skills={skills} />
      <ProjectsSection/>
    </div>
  );
}

export default App;
