import React from 'react'
import style from './Logo.module.css'
import logo from '../../../logo.PNG'

const Logo = (props) => {
    return (
        <img className={style.logo} src={logo}/>
    )
};

export default Logo;