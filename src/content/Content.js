import React from 'react';
import style from './Content.module.css'

const Content = (props) => {
    return (
        <div className={style.content}>
            <div>
                first Currency
            </div>
            <div>
                Second Currency
            </div>
            <div>
                Third Currency
            </div>
            <div>
                Fourth Currency
            </div>
            <div>
                Fifth Currency
            </div>
        </div>
    );
};

export default Content;