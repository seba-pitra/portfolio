import About             from './pages/About/About';
import { BrowserRouter } from 'react-router-dom';
import Home              from './pages/Home/Home';
import NavBar            from './components/NavBar/NavBar';
import Projects          from './pages/Projects/Projects';
import { Route }         from 'react-router-dom';
import { Routes }        from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
