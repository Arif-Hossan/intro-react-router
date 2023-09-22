// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Friends = () => {
    //load the data that send from loader
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <p>This is from Friends</p>
        </div>
    );
};

export default Friends;