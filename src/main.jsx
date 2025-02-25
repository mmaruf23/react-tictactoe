import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import User from './pages/User.jsx';
import Home from './pages/Home.jsx';
import SingleMode from './pages/SingleMode.jsx';
import MultiMode from './pages/MultiMode.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/single' element={<SingleMode />} />
        <Route path='/multi' element={<MultiMode />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
