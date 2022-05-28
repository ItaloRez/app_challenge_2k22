import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EscolherEndereco from './pages/EscolherEndereco';
import Home from './pages/Home';
import Orcamento from './pages/Orcamento';
import Pedido from './pages/Pedido';
import Splash from './pages/Splash';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="home" element={<Home />} />
      <Route path="pedido" element={<Pedido />} />
      <Route path="orcamento" element={<Orcamento />} />
      <Route path="escolherEndereco" element={<EscolherEndereco />} />
    </Routes>
  );
}

export default App;
