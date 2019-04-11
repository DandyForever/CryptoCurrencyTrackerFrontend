import React from 'react';
import style from './LogIn.module.css'
import AboutUs from "./items/aboutUs/AboutUs";
import Logging from "./items/logging/Logging";

const LogIn = (props) => {
    return (
        <div className={style.logIn}>
            <AboutUs/>
            <Logging/>
        </div>
    );
};

export default LogIn;