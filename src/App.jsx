import Header from '/components/Header'
import About from '/components/About'
import Skills from '/components/Skills'
import Contact from '/components/Contact'
import Footer from '/components/Footer'

import './App.css'

function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Header />
      <div id="main-container">
        <img id="main-img" src="/img/IMAGE.png" alt="A photo of Georgios on his laptop."></img>
        <div className="text-content">
          <h1 id="name">Hello! I&apos;m George Toufexis.</h1>
          <p>Turning your vision into reality through digital lens!
            I build exceptional websites designed to fit your specific needs.
            Let&apos;s bring your online presence to life.</p>
          <button id="main-btn" onClick={scrollToContact}>Get in touch</button>
        </div>
      </div>
      <div id="about-section">
        <About />
      </div>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App
