import React from 'react'
import style from './InputField.module.css'

const InputField = (props) => {
    return (
        <div className={style.inputField}>
            {props.text}
            <br/>
            <input/>
        </div>
    );
};

export default InputField;