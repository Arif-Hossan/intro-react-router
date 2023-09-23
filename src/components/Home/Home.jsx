// import React from 'react';

import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import './Home.css';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
           <div className={navigation.state==="loading"?"loading":""}>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Home;