import React from 'react'
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/courses" element={<Courses/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App