import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home.jsx'

function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
