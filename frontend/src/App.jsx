import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  )
}

export default App