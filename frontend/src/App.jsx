import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ProductItem from "./pages/Product_Item";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/product/:productId" element={<ProductItem />} />
      </Routes>
    </>
  )
}

export default App