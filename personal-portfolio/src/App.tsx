import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects/Projects'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App
