// import React from 'react';

import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {title,body} = postDetails;
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h5>{title}</h5>
            <p>{body}</p>
            <button onClick={handleGoBack}>Got Back</button>
        </div>
    );
};

export default PostDetails;