import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Activity</Link>
                <Link to='/invitations'>Invitations</Link>
                <Link to='/reports'>Reports</Link>
                <Link to='/sites'>Sites</Link>
                <Link to='/displays'>Displays</Link>
                <Link to='/team'>Team</Link>
                <Link to='/user'>User</Link>
            </div>
        );
    }
}

export default Nav;