import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <div className="scrollContainer">
          <section id="home" className="pageSection">
            <div>
              <Home />
            </div>
          </section>
          <section id="about" className="pageSection">About</section>
          <section id="projects" className="pageSection">Projects</section>
          <section id="contact" className="pageSection">Contact</section>
        </div>
      </main>
    </div>
  )
}

export default App
