// import React from 'react';

import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    const {name,phone,username,website} = friendDetails;
    return (
        <div>
            <h4>{name}</h4>
            <p>{phone}</p>
            <p>{username}</p>
            <p>{website}</p>
        </div>
    );
};

export default FriendDetails;