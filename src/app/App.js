import './App.scss';

import React, { Component } from 'react';
import Header from '../page_blocks/header/Header';
import Footer from '../page_blocks/footer/Footer';
import TickTackToe from '../pages/ticTacToe/TickTackToe';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';
import { Container } from 'react-bootstrap';


class App  extends Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header />
              <main>
                <Container>
                
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="tick-tack-toe" element={<TickTackToe />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
              </Container>
              </main>
            <Footer/>
          </div>
        </BrowserRouter>
  );
  }
}

export default App;
