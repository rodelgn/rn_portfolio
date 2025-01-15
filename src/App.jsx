import React, { useRef } from 'react';
import NavMenu from './components/NavMenu';
import About from './components/About';
import Skills from './components/Skills'
import Footer from './components/Footer';
import Projects from './components/Projects';
import cards from './components/project-card'

function App() {
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div>
      <NavMenu 
      skillsRef={skillsRef}
      projectRef={projectRef}
      footerRef={footerRef}
      />
      <About />
      <Skills ref={skillsRef} />
      <Projects
        ref={projectRef}
        projects={cards}
      />
      <Footer ref={footerRef} />
    </div>
  );
};

export default App;