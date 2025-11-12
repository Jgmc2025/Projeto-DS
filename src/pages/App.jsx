import { Routes, Route } from 'react-router-dom';
import Inicial from './inicial';
import Login from './login';
import Ler from './lerqr';
import Gerar from './gerarqr';
import Local from './local';
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
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
}

export default App;