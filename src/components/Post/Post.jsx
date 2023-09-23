// import React from 'react';

import {  useNavigate } from "react-router-dom";

const Post = ({ post }) => {

    const { id, title, body } = post;
    const navigates = useNavigate();
    const handleDetails = () => {
        navigates(`/post/${id}`);
    }

    return (
        <div>
            <h4>{title}</h4>
            <p><small>{body}</small></p>
            <button onClick={handleDetails}>Details</button>
        </div>
    );
};

export default Post;