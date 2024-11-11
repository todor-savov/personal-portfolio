import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useCallback } from "react";
import Particles from 'react-particles';
import { particlesOptions } from './common/particles';
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import './App.css'
import Contact from './components/Contact/Contact';

const App = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container|undefined) => {
    await console.log(container);
  }, []);
     
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<h1>Experience</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} loaded={particlesLoaded} />    
    </BrowserRouter>
  )
}

export default App;
