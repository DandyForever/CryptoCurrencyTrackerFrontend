import React from 'react'
import style from './Logging.module.css'
import InputFeild from "../../../logIn/items/inputField/InputField"

const Logging = (props) => {
    return (
        <div className={style.logging}>
            <InputFeild text = "Email"/>
            <InputFeild text = "Password"/>
            <button>Sign Up</button>
        </div>
    );
};

export default Logging