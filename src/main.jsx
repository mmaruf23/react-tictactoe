import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';
import User from './pages/User.jsx';
import Home from './pages/Home.jsx';
import SingleMode from './pages/SingleMode.jsx';
import MultiMode from './pages/MultiMode.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/single' element={<SingleMode />} />
        <Route path='/multi' element={<MultiMode />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
