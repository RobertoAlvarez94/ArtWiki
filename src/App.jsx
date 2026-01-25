import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Values from './pages/Values'
import Perspective from './pages/Perspective'
import ColorTheory from './pages/ColorTheory'
import Anatomy from './pages/Anatomy'
import Composition from './pages/Composition'
import DigitalPainting from './pages/DigitalPainting'
import TraditionalPencil from './pages/TraditionalPencil'
import OilAcrylics from './pages/OilAcrylics'
import Gesture from './pages/Gesture'
import Roadmap from './pages/Roadmap'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/values" element={<Values />} />
        <Route path="/perspective" element={<Perspective />} />
        <Route path="/color-theory" element={<ColorTheory />} />
        <Route path="/anatomy" element={<Anatomy />} />
        <Route path="/composition" element={<Composition />} />
        <Route path="/digital-painting" element={<DigitalPainting />} />
        <Route path="/traditional-pencil" element={<TraditionalPencil />} />
        <Route path="/oil-acrylics" element={<OilAcrylics />} />
        <Route path="/gesture" element={<Gesture />} />
      </Routes>
    </Layout>
  )
}

export default App
