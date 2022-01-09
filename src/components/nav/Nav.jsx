import React, { Component } from 'react';

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
              <button type="button" onClick={this.showNav}> Show Menu </button>
              <h1>{this.state.title}</h1>
              <h2>{this.state.subtitle}</h2>
              <p>{this.state.show}</p>
                <ul>
                    {Object.keys(this.props.nav).map(item => {
                        return <li><a href={this.props.nav[item]}>{item}</a></li>
                    })}
                </ul>
          </nav>
        );
    }
}

export default Nav;
