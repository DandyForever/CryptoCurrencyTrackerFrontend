import axios from 'axios'


const FETCH_SUBSCRIPTIONS = 'FETCH_SUBSCRIPTIONS';
const FETCH_SUBSCRIPTIONS_PENDING = 'FETCH_SUBSCRIPTIONS_PENDING';
const FETCH_SUBSCRIPTIONS_REJECTED = 'FETCH_SUBSCRIPTIONS_REJECTED';
const FETCH_SUBSCRIPTIONS_FULFILLED = 'FETCH_SUBSCRIPTIONS_FULFILLED';


const DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION';
const MUST_FETCH = 'MUST_FETCH';

let initialState = {
    mustFetch : true,

    fetching: false,
    fetched: false,
    error: null,

    subscriptions: []
};

const subscriptionsReducer = (state = initialState, action) => {

    switch (action.type) {
        case MUST_FETCH:
            return {
                ...state,
                mustFetch : action.newValue
            };

        case FETCH_SUBSCRIPTIONS_PENDING:
            return{
                ...state,
                fetching : false,
                error : null
            };

        case FETCH_SUBSCRIPTIONS_REJECTED:
            return {
                ...state,
                fetching : false,
                error : action.error
            };

        case FETCH_SUBSCRIPTIONS_FULFILLED:
            let subscriptions = prepareSubscriptionsToDisplay(action.payload.data);
            console.log(action.payload.data);
            return {
                ...state,
                fetching : false,
                fetched : true,
                subscriptions : subscriptions
            };

        case DELETE_SUBSCRIPTION:
            return deleteSubscription(state, action.subscriptionPK);

        default:
            return state;
    }
};

const prepareSubscriptionsToDisplay = (subscriptionsDtos) => {

    subscriptionsDtos.forEach(obj => {
       obj.totalAssets = calculateTotalAssets(obj);
    });

    return subscriptionsDtos;
};

const calculateTotalAssets = (object) => {
    let totalAssets = 0;

    totalAssets += object.currencyDto.currVal * object.userVal;

    return totalAssets;
};

const buildSubscriptionDto = (subscription) => {
    return {
        currencyId : subscription.subscriptionPK.currencyId,
        userId : subscription.subscriptionPK.userId
    };
};

const deleteSubscription = (state, subscriptionPK) => {
      let stateCopy = {...state};
      stateCopy.subscriptions = {...state.subscriptions};

      let subscriptionToDelete = findBySubscriptionPK(stateCopy.subscriptions, subscriptionPK);
      let subscriptionToDeleteIndex = stateCopy.subscriptions.indexOf(subscriptionToDelete);

      httpDeleteSubscription(subscriptionToDelete);

      stateCopy.subscriptions.splice(subscriptionToDeleteIndex, 1);

      return stateCopy;
};


const httpDeleteSubscription = (subscriptionToDelete) =>{
    axios.post("http://localhost:8080/crypto-tracker/subscriptions/delete_subscription", buildSubscriptionDto(subscriptionToDelete));
};


const findBySubscriptionPK = (array, subscriptionPK) => {
  return array.filter(item => item.subscriptionPK === subscriptionPK)[0];
};

//Action Creators

export const setMustFetchSubscriptionCreator = (newValue) => {
    return {
        type : MUST_FETCH,
        newValue: newValue
    }
};

export const fetchSubscriptionsCreator = () => {
    return {
        type : FETCH_SUBSCRIPTIONS,
        payload: axios.get("http://localhost:8080/crypto-tracker/subscriptions")
    }
};

export const deleteSubscriptionCreator = (subscriptionPK) => {
    return {
        type : DELETE_SUBSCRIPTION,
        subscriptionPK : subscriptionPK
    }
};

export default subscriptionsReducer;