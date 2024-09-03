import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/friends">Friends</Link>
                </li>
                <li>
                    <Link to="/chat">Chat</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;