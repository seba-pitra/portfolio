import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
