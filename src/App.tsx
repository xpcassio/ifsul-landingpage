import { StrictMode } from 'react';
import 'bootstrap';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import './scss/styles.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default function App() {
  return <Home />;
}
