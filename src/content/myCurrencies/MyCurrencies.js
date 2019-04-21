import React from 'react';
import Subscription from './items/Subscription'
import style from './MyCurrencies.module.css'

import {logger} from "redux-logger";


const MyCurrencies = (props) => {

    if (props.mustFetch){
        props.fetchSubscriptions();
        props.setMustFetch(false);
    }

    let subscriptions = props.subscriptions.map(subscription => <Subscription
        key = {subscription.id}
        id = {subscription.id}
        subscriptionPK = {subscription.subscriptionPK}
        currencyDto = {subscription.currencyDto}
        userVal = {subscription.userVal}
        totalAssets = {subscription.totalAssets}
        deleteSubscription = {subscription.deleteSubscription}
        />);

    return (
          <div className={style.myCurrencies}>
              <table className={style.currenciesTable}>
                  <thead>
                  <tr>
                      <th>Crypto Name</th>
                      <th>Crypto Value</th>
                      <th>Cash in USD</th>
                  </tr>
                  </thead>
                  <tbody>
                  {subscriptions}
                  </tbody>
              </table>
          </div>
  )
};


export default MyCurrencies
