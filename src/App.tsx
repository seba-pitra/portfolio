import React from 'react';
import './App.css';
import About             from './pages/About/About';
import { BrowserRouter } from 'react-router-dom';
import Contact           from './pages/Contact/Contact';
import Home              from './pages/Home/Home';
import Projects          from './pages/Projects/Projects';
import { Route }         from 'react-router-dom';
import { Routes }        from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
