import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Roadmap from './Pages/RoadMap/RoadMap';
import HowToBuy from './Pages/HowtoBuy/HowtoBuy';
import Airdrop from './Pages/Airdrop/Airdrop';
import Contact from './Pages/Contact/Contact';
import Layout from './Pages/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/contact" element={<Contact />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
