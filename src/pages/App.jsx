import { Routes, Route } from 'react-router-dom';
import Prelogin from './prelogin';
import Login from './login';
import Ler from './lerqr';
import Gerar from './gerarqr';
import Local from './local';
import Menu from './menu';
import Cards from './vacinas-disponiveis';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Prelogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/qrcode-scan" element={<Ler />} />
      <Route path="/qrcode-gen" element={<Gerar />} />
      <Route path="/mapa" element={<Local />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/vacinas-disponiveis" element={<Cards />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
}

export default App;