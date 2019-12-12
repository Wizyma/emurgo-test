import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

import './i18n';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', 'Open-Sans', sans-serif;
    color: whitesmoke;
    letter-spacing: 2px;
    margin: 0;
    padding: 0;
    outline: 0; 
    border: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`

ReactDOM.render(
  <Router>
    <>
      <GlobalStyles />
      <App />
    </>
  </Router>
, document.getElementById('root'));

