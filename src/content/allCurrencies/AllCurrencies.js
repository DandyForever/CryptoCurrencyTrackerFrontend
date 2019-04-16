import React from 'react';
import Currency from './items/Currency'
import style from './AllCurrencies.module.css'
import {logger} from "redux-logger";

const AllCurrencies = (props) => {
    debugger;
    logger(props);
    props.fetchCurrencies();
    debugger;
    logger(props);

    let currencies = props.currencies.map(currency => <Currency key={currency.id}
        id={currency.id}
        name={currency.name}
        value={currency.currVal}
        lastChange={currency.lastChange}/>);


    logger(props);
    return (
        <div className={style.allCurrencies}>
            <table className={style.currenciesTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Value</th>
                        <th>Last Change</th>
                    </tr>
                </thead>
                <tbody>
                    {currencies}
                </tbody>
            </table>
        </div>
    );
};

export default AllCurrencies;