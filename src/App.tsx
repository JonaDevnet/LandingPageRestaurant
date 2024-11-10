import React from 'react';
import './App.css';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      {/* <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
