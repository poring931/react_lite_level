import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
           <ul>
            {Object.keys(this.props.nav).map(item => {
                return <li><a href={this.props.nav[item]}>{item}</a></li>
            })}
        </ul>
        );
    }
}

export default Nav;
