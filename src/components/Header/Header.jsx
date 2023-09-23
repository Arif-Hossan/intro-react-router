// import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css';

// import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <ActiveLink to="/">home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </div>
    );
};

export default Header;