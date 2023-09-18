import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
// **************************** 
import './index.css';
// Pages
import Home from './Pages/Home'
import Feedback from './Pages/Feedback';
import Cardapio from './Pages/Cardapio';
// import Header from './Components/Header';

// Components
import NotPageFound from './Components/NotPageFound';
import Login from './Pages/Login';
import CadastroUsuarioAdmin from './Components/CadastroUsuarioAdmin';
import SecaoCardSemanal from './Components/SecaoCardSemanal';
import ResetaSenhaUsuario from './Pages/ResetaSenhaUsuario';

const ComponentHeader = React.lazy(() => import('./Components/Header'))
const GlobalStyle = createGlobalStyle`
    :root {
      --color-primary: #C0ECFA;
      --color-secondary: #fff;
      --color-thirty: #000;

      --font-primary: "normalidad";
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
    }
    html,body {
      overflow-x: hidden;
      height: 100%;
      width: 100%;
    }
    body {
      background-color: var(--color-secondary);
      font-family: var(--font-primary);
      font-size: 16px;
      font-weight: 400;
    }
    ::selection {
      background-color: var(--color-primary);
      color: var(--color-secondary);
    }
    li {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: var(--color-thirty);
    }
  `;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
        <ComponentHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/restaurante" element={<SecaoCardSemanal />} />
          <Route path="/restaurante/:id" element={<Cardapio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/resete-password' element={<ResetaSenhaUsuario />} />
          <Route path='/cadastro-usuario-admin' element={<CadastroUsuarioAdmin />} />
          <Route path='*' element={<NotPageFound />} />
        </Routes>
        <GlobalStyle />
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
