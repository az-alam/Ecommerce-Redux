import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import HomePage from './HomePage';
import Cart from './Cart';

function Home() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Home