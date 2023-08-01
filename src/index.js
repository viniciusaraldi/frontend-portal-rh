import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// **************************** 
import './index.css';
import CriaSugestao from './Pages/CriaSugestao/CriaSugestao.js';
import Home from './Pages/Home'
import Header from './Components/Header';
import Sugestao from './Pages/Sugestao';
import Elogio from './Pages/Elogio';
import Critica from './Pages/Critica';
import CriaElogio from './Pages/CriaElogio/CriaElogio';
import CriaCritica from './Pages/CriaCritica/CriaCritica';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sugestao" element={<Sugestao />} />
        <Route path="/elogio" element={<Elogio />} />
        <Route path="/critica" element={<Critica />} />
        <Route path='/cria-sugestao' element={<CriaSugestao />} />
        <Route path='/cria-elogio' element={<CriaElogio />} />
        <Route path='/cria-critica' element={<CriaCritica />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
