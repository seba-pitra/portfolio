import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter }  from 'react-router-dom';
import { Navigate }       from 'react-router-dom';
import { Route }          from 'react-router-dom';
import { Routes }         from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ChatBot            from '../components/ChatBot/ChatBot';
import Contact            from '../pages/Contact/Contact';
import Home               from '../pages/Home/Home';
import NavBar             from '../components/NavBar/NavBar';
import PDFResume          from '../components/PDFResume/PDFResume';
import Projects           from '../pages/Projects/Projects';
import React              from 'react';

const Navigation: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='relative'>
          <NavBar />
          <ChatBot />

          <Routes>
            <Route path='/*'        element={ <Navigate to={"/"} replace /> } />
            <Route path='/'         element={ <Home />      } />
            <Route path="/resume"   element={ <PDFResume /> } />
            <Route path='/projects' element={ <Projects />  } />
            <Route path='/contact'  element={ <Contact />   } />
          </Routes>
          
        </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default Navigation;