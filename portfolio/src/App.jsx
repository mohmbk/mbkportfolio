import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Navbar/Nav'
import Projects from './pages/projects/projects'
import Home from './pages/home/home'
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Contact from './pages/contact/contact';

function App() {
  

  return (
    <>
      
      
        <Nav />
        <Home/> 
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        





      
    </>
  )
}

export default App
