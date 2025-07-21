import { StrictMode } from 'react';
import 'bootstrap';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import './scss/styles.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/sobre" element={<Sobre />} />
        <Route index path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
