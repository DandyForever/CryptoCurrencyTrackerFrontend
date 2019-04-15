import React from 'react'
import style from './LogOut.module.css'
import {NavLink} from "react-router-dom";

const LogOut = (props) => {
    return (
        <div className={style.logOut}>
            <NavLink exact to = '/' activeClassName={style.activeNavLink}>Log out</NavLink>
        </div>
    )
};

export default LogOut