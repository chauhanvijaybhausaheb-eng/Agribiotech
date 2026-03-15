import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Crops from './components/Crops';
import News from './components/News';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBotIcon from './components/ChatBotIcon';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Crops />
        <News />
        <Gallery />
        <Products />
        <Contact />
      </main>
      <Footer />
      <ChatBotIcon />
    </div>
  );
}
