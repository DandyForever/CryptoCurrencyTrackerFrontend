import React from 'react'
import style from './AllCrypto.module.css'
import {NavLink} from "react-router-dom";

const AllCrypto = (props) => {
    return (
        <div className={style.allCrypto}>
            <NavLink to = '/allCurrencies' activeClassName={style.activeNavLink}>All Crypto Currencies</NavLink>
        </div>
    )
};

export default AllCrypto;