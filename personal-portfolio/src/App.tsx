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
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import './App.css'
import Test from './components/Test/Test';

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
      <div className="app-container">
        <Navigation />    
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </div>
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} loaded={particlesLoaded} />
      </div>
    </BrowserRouter>
  )
}

export default App;
