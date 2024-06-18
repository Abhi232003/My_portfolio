import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Home from './components/home/home'
import About from './components/about/about'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Background from './components/background/background';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg_main'>
        <Canvas className="background-canvas">
          <Background />
        </Canvas>
      </div>

      <Router>
        <div className='logo_div'>
          <Link to="/">AMK</Link >
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

// < Link to = "/" > Home</Link >
// <Link to="/about">About</Link>