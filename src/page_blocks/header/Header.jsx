import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';

class Header extends Component {
    render() {

        return (
            
            <header className="App-header">
              <Nav nav={this.props.nav}/>
               
               
            </header>
        );
    }
}

export default Header;


