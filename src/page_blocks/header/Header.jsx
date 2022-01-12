import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Navigation from '../../components/nav/Nav';

class Header extends Component {
    render() {

        return (
            <header className="App-header container">
                <Navbar bg="light" variant="light">
                    <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="/images/dollar-svgrepo-com.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                       <h1  className="d-inline-block align-top">Курс валют</h1>
                    </Navbar.Brand>
                    </Container>
                </Navbar>
              <Navigation nav={this.props.nav}/>
            </header>
        );
    }
}

export default Header;


