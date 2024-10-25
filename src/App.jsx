import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Header from '/components/Header'
import Projects from '/components/Projects'
import About from '/components/About'
import Skills from '/components/Skills'
import Footer from '/components/Footer'


import './App.css'

function Home() {
  const [showHiddenAreas, setShowHiddenAreas] = useState(false);
  const [navigate, setNavigate] = useState(false);

  const navigateTo = useNavigate();

  const handleScroll = () => {
    setShowHiddenAreas(true);
  };

  const handleNavigateToProjects = () => {
    setNavigate(true);
    setTimeout(() => {
      navigateTo('/projects');
    }, 300);

  }

  useEffect(() => {
    if (showHiddenAreas) {
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [showHiddenAreas]);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 0) {
        setShowHiddenAreas(true);
      } else if (window.scrollY == 0) {
        setShowHiddenAreas(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div id="main-container" className={navigate ? 'slide-out': ''}>
        <img id="main-img" src="/img/IMAGE.png" alt="A photo of Georgios on his laptop."></img>
        <div className="text-content">
          <h1 id="name">Hello! I'm Georgios Toufexis.</h1>
          <p>Turning your vision into reality through digital lens!
            I build exceptional websites designed to fit your specific needs.
            Let's bring your online presence to life.</p>
          <button id="main-btn" onClick={handleNavigateToProjects}>See my work</button>
        </div>
      </div>
      {!showHiddenAreas && (
        <div id="scroll-down-arrow" onClick={handleScroll}></div>
      )}
        <div id="hidden-areas" className={navigate ? 'slide-out' : (showHiddenAreas ? '' : 'hidden')}>
          <div id="about-section">
            <About />
          </div>
          <Skills />
          <Footer />
        </div>
    </>
  );
}

function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

function App() {
  return(
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App
