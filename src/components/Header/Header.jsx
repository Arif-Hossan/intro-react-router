// import React from 'react';
import './Header.css';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Header;