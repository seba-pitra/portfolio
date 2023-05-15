import { BrowserRouter } from 'react-router-dom';
import Contact           from './pages/Contact/Contact';
import Home              from './pages/Home/Home';
import PDFResume         from './components/PDFResume/PDFResume';
import Projects          from './pages/Projects/Projects';
import React             from 'react';
import { Route }         from 'react-router-dom';
import { Routes }        from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/'         element={<Home />} />
          <Route path="/resume"   element={<PDFResume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact'  element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
