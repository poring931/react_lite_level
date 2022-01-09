import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';



    let nav = {
          "main": '/index',
          "about": '/about',
          "price": '/price',
          "contacts": '/contacts',
      }
ReactDOM.render(
  <React.StrictMode>
    <App nav={nav} text='asdsadsadsa'/>
  </React.StrictMode>,
  document.getElementById('root')
);


