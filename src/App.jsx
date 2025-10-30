import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tips from './pages/Tips';
import Pledge from './pages/Pledge';
import Report from './pages/Report';
// import Resources from './pages/Resources'; // REMOVED
// import Events from './pages/Events';     // REMOVED
import Gallery from './pages/Gallery';
import About from './pages/About';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral">
      <Nav />
      <main className="flex-grow container py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/report" element={<Report />} />
          {/* <Route path="/resources" element={<Resources/>} />  -- Removed */}
          {/* <Route path="/events" element={<Events/>} />      -- Removed */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}