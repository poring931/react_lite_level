import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Contacts from '../../pages/Contacts';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Navigation',
            subtitle: 'Main menu',
            show: 'show'
        }
    }

    showNav = () => {
        this.setState({ show: 'hide'})
    }

    render() {
        return (
          <nav>
                <ul>
                    {Object.keys(this.props.nav).map(item => {
                        return <li key={item}><Link  to={this.props.nav[item]}>{item}</Link></li>
                    })}
                </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </nav>
        );
    }
}

export default Nav;
