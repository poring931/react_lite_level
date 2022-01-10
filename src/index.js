import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';



    let nav = {
          "home": '/',
          "about": '/about',
          "price": '/price',
          "contacts": '/contacts',
      }
ReactDOM.render(
  <BrowserRouter>
    <App nav={nav} text='asdsadsadsa'/>
  </BrowserRouter>,
  document.getElementById('root')
);


