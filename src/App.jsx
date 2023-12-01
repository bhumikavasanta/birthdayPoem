import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import About from './components/About';
import Vibe from './components/Vibe';
import './App.css';
import { DataProvider } from './DataProvider';
import Questions from './components/Questions';

function App() {
  return (
    <div className='main-container'>
      <div className='container'>
        <BrowserRouter>
          <DataProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register/about" element={<About />} />
              <Route path="/register/about/vibe" element={<Vibe />} />
              <Route path="/register/about/vibe/questions" element={<Questions />} />
            </Routes>
          </DataProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
