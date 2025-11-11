import { Routes, Route } from 'react-router-dom';
import Inicial from './pages/inicial';
import Login from './pages/login';
import Ler from './pages/lerqr';
import Gerar from './pages/gerarqr';
import Local from './pages/local';
import Vacinas from './pages/vacinas';
import Capibas from './pages/capibas';
import './App.css';
import './index.css';
import './other.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/qrcode-scan" element={<Ler />} />
      <Route path="/qrcode-gen" element={<Gerar />} />
      <Route path="/mapa" element={<Local />} />
      <Route path="/vacinas" element={<Vacinas />} />
      <Route path="/capibas" element={<Capibas />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
}

export default App;