import React from 'react';
import style from './SignPage.module.css'
import Logo from "../header/items/logo/Logo";
import SignUp from "./items/signUp/SignUp";

const SignPage = (props) => {
    return (
        <header className={style.signPage}>
            <Logo/>
            <SignUp/>
        </header>
    );
};

export default SignPage;