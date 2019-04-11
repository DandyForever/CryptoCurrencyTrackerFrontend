import React from 'react';
import style from './AllCurrencies.module.css'

const AllCurrencies = (props) => {
    return (
        <div className={style.allCurrencies}>
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

export default AllCurrencies;