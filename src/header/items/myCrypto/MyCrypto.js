import React from 'react'
import style from './MyCrypto.module.css'
import {NavLink} from "react-router-dom";

const MyCrypto = (props) => {
    return (
        <div className={style.myCrypto}>
            <NavLink to = '/myCurrencies' activeClassName={style.activeNavLink} >My Crypto Currencies</NavLink>
        </div>
    )
};

export default MyCrypto