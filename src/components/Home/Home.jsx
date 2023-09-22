// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <p>This is home page</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;