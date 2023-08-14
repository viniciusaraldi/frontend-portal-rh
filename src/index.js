import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// **************************** 
import './index.css';
import CriaSugestao from './Pages/CriaSugestao/CriaSugestao.js';
import Home from './Pages/Home'
import Header from './Components/Header';
import CriaElogio from './Pages/CriaElogio/CriaElogio';
import CriaCritica from './Pages/CriaCritica/CriaCritica';
import NotPageFound from './Components/NotPageFound';
import Login from './Components/Login';
import CadastroUsuarioAdmin from './Components/CadastroUsuarioAdmin';
import Feedback from './Pages/Feedback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path='/cria-sugestao' element={<CriaSugestao />} />
          <Route path='/cria-elogio' element={<CriaElogio />} />
          <Route path='/cria-critica' element={<CriaCritica />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro-usuario-admin' element={<CadastroUsuarioAdmin />} />
          <Route path='*' element={<NotPageFound />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
