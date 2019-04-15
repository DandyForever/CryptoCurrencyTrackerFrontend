import React from 'react'
import style from './SignUp.module.css'
import {NavLink} from "react-router-dom";

const SingUp = (props) => {
    return (
        <div className={style.signUp}>
            <NavLink exact to = '/SignUp' activeClassName={style.activeNavLink}>Log out</NavLink>
        </div>
    )
};

export default SingUp