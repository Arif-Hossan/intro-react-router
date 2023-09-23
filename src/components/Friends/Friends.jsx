// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
    //load the data that send from loader
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            <p>This is from Friends</p>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;