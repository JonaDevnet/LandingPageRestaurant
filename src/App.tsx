import React from 'react';
import './App.css';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Work } from './components/Work/Work';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
// hola mundo
// chao

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
