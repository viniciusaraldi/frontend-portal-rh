import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// **************************** 
import './index.css';
// Pages
import Home from './Pages/Home'
import Feedback from './Pages/Feedback';
import Cardapio from './Pages/Cardapio';
import Header from './Components/Header';
// Components
import NotPageFound from './Components/NotPageFound';
import Login from './Pages/Login';
import CadastroUsuarioAdmin from './Components/CadastroUsuarioAdmin';
import SecaoCardSemanal from './Components/SecaoCardSemanal';
import CriaSugestao from './Components/CriaSugestao/CriaSugestao';
import CriaElogio from './Components/CriaElogio/CriaElogio';
import CriaCritica from './Components/CriaCritica/CriaCritica';
import ResetaSenhaUsuario from './Pages/ResetaSenhaUsuario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/cria-sugestao" element={<CriaSugestao />} />
          <Route path="/cria-elogio" element={<CriaElogio />} />
          <Route path="/cria-critica" element={<CriaCritica />} />
          <Route path="/natura" element={<SecaoCardSemanal />} />
          <Route path="/natura/:id" element={<Cardapio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/resete-password' element={<ResetaSenhaUsuario />} />
          <Route path='/cadastro-usuario-admin' element={<CadastroUsuarioAdmin />} />
          <Route path='*' element={<NotPageFound />} />
        </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
