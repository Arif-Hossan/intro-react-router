// import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    const {id,name,email,phone} = friend;
    
    return (
        <div className='friend'>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/friend/${id}`}>Details about this person</Link>
            
        </div>
    );
};

export default Friend;