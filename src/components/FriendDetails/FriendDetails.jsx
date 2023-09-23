// import React from 'react';

import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    const {name,phone,username,website} = friendDetails;
    const navigate = useNavigate();
    const handleGoBack = ()=> {
        navigate(-1);
    }
    return (
        <div>
            <h4>{name}</h4>
            <p>{phone}</p>
            <p>{username}</p>
            <p>{website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default FriendDetails;