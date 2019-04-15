import React from 'react';
import style from './HeaderStart.module.css'
import Logo from "../header/items/logo/Logo";
import SignUp from "./items/signUp/SignUp";

const HeaderStart = (props) => {
    return (
        <header className={style.headerStart}>
            <Logo/>
            <SignUp/>
        </header>
    );
};

export default HeaderStart;