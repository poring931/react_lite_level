import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props){
        super(props);
    
    }

    showNav = () => {
        this.setState({ show: 'hide'})
    }

    render() {
        return (
          <nav>
            <Nav fill variant="tabs" >
                <Nav.Item>
                    <Link to="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="contacts">Contacts</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="tick-tack-toe"> tick-tack-toe </Link>
                </Nav.Item>
            </Nav>
          </nav>
        );
    }
}

export default Navigation;
