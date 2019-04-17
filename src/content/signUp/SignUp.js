import React from 'react';
import style from './SignUp.module.css'
import Logging from "./items/logging/Logging";

const SignUp = (props) => {
    return (
        <div className={style.signUp}>
            <Logging/>
        </div>
    );
};

export default SignUp;