import React from 'react'
import style from './SignUp.module.css'
import {NavLink} from "react-router-dom";

const SignUp = (props) => {
    return (
        <div className={style.signUp}>
            <NavLink to = '/SignUp' activeClassName={style.activeNavLink}>Sign Up</NavLink>
        </div>
    )
};

export default SignUp;