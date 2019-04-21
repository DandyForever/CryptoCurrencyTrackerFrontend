import {
    fetchSubscriptionsCreator,
    deleteSubscriptionCreator,
    setMustFetchSubscriptionCreator
} from "../../redux/subscriptionReducer";


import MyCurrencies from "./MyCurrencies";

import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        mustFetch : state.allSubscriptions.mustFetch,
        subscriptions: state.allSubscriptions.subscriptions,
    };
};


let mapDispatchToProps = (dispatch) => {
    return {

        setMustFetch : (newValue) => {
            dispatch(setMustFetchSubscriptionCreator(newValue));
        },

        fetchSubscriptions : () => {
            dispatch(fetchSubscriptionsCreator());
        },

        deleteSubscription : (subscriptionPK) => {
            console.log();
            dispatch(deleteSubscriptionCreator(subscriptionPK));
        }
    }
};

let MyCurrenciesContainer = connect(mapStateToProps, mapDispatchToProps)(MyCurrencies);

export default MyCurrenciesContainer;