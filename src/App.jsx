import Header from '/components/Header'
import Hero from '/components/Hero'
import Marquee from '/components/Marquee'
import Services from '/components/Services'
import Experience from '/components/Experience'
import AboutSkills from '/components/AboutSkills'
import Contact from '/components/Contact'
import Footer from '/components/Footer'
import useReveal from './useReveal.js'

import './App.css'

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Experience />
      <AboutSkills />
      <Contact />
      <Footer />
    </>
  );
}
