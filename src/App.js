import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import SkillTree from './components/SkillTree';
import {skills} from './data/skills';
import ProjectsSection from './components/ProjectSections';
import CodeSnippetsSection from './components/codeSnippetsSection';
import EducationSection from './components/EducationSection';
import JobExperienceSection from './components/JobExperienceSection';
import GetInTouchSection from './components/GetInTouchSection';
import WhatsAppIcon from './components/WhatsAppIcon';
function App() {

  return (
    <div className="App">
      <Header/>
      <MainSection/>
      <AboutSection/>
      <SkillTree skills={skills} />
      <ProjectsSection/>
      <CodeSnippetsSection/>
      <EducationSection/>
      <JobExperienceSection/>
      <GetInTouchSection/>
      <WhatsAppIcon />
    </div>
  );
}

export default App;
