import React, { useEffect } from 'react';
// components
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    document.title = `Serafica's Home`;
    }, []);

  return (
    <div className='bg-site bg-cover bg-no-repeat overflow-y-auto '>
      <Header />
      <Home />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
