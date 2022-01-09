import './App.scss';

import React, { Component } from 'react';
import Header from '../page_blocks/header/Header';
import Main from '../page_blocks/main/Main';
import Footer from '../page_blocks/footer/Footer';
import TickTackToe from '../components/ticTacToe/TickTackToe';


class App  extends Component  {
  render() {

    return (
    <div className="App">
      <Header nav={this.props.nav}/>
      <Main/>
      <Footer/>


      <TickTackToe/>
      


    </div>
  );
  }
}

export default App;
