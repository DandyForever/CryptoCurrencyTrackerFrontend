import React from 'react'
import style from './Logo.module.css'
import logo from '../../../logo.PNG'

const Logo = (props) => {
    return (
        <div className={style.logoDiv}>
            <img className={style.logo} src={logo}/>
        </div>
    )
};

export default Logo;