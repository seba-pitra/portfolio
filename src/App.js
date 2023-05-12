import About             from './pages/About/About';
import { BrowserRouter } from 'react-router-dom';
import Contact           from './pages/Contact/Contact';
import Home              from './pages/Home/Home';
import Projects          from './pages/Projects/Projects';
import { Route }         from 'react-router-dom';
import { Routes }        from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
