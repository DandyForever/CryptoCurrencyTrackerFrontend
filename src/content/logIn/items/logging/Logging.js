import React from 'react'
import style from './Logging.module.css'
import InputField from "../inputFeild/InputField";

const Logging = (props) => {
    return (
        <div className={style.logging}>
            <InputField text = "Email"/>
            <InputField text = "Password"/>
            <button>Log In</button>
        </div>
    );
};

export default Logging