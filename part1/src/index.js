import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( //Insala dependencia para correr react en el navegador
  <React.StrictMode> 
    <App />  
  </React.StrictMode>,
  document.getElementById('root') //Renderiza la <App /> en el elemento con ID='root'
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
