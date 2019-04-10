import React from 'react';
import Logo from  './items/logo/Logo'
import style from './Header.module.css'
import AllCrypto from "./items/allCrypto/AllCrypto";
import MyCrypto from "./items/myCrypto/MyCrypto";
import LogOut from "./items/logOut/LogOut";

const Header = (props) => {
    return (
        <header className={style.header}>
            <Logo/>
            <AllCrypto/>
            <MyCrypto/>
            <LogOut/>
        </header>
    );
};

export default Header;