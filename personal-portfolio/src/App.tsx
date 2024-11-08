import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects/Projects'
import Navigation from './components/Navigation/Navigation'
import './App.css'

const App = () => {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<h1>Experience</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App
