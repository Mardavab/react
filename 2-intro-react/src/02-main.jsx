import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

//const h1 = React.createElement('h1', null, 'hola mundo');
const h1 = <div><ul><li>Hola mundo</li></ul></div>
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  h1
);