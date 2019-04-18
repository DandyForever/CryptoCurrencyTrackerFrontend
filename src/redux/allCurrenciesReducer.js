import axios from 'axios'

const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
const FETCH_CURRENCIES_PENDING = 'FETCH_CURRENCIES_PENDING';
const FETCH_CURRENCIES_REJECTED = 'FETCH_CURRENCIES_REJECTED';
const FETCH_CURRENCIES_FULFILLED = 'FETCH_CURRENCIES_FULFILLED';
const SAVE_SUBSCRIPTION = 'SAVE_SUBSCRIPTION';

const initialState = {
    fetching: false,
    fetched: false,
    currencies: [],
    error: null
};

const allCurrenciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENCIES_PENDING:
            return {...state, fetching: false};

        case FETCH_CURRENCIES_REJECTED:
            return {...state, fetching: false, error: action.error};

        case FETCH_CURRENCIES_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: false,
                currencies: action.payload.data
            };

        case SAVE_SUBSCRIPTION:
            return saveSubscription(state, action);

        default:
            return state

    }
};

export const fetchCurrenciesCreator = () => {
    return {
        type: FETCH_CURRENCIES,
        payload: axios.get("http://localhost:8080/crypto-tracker/currency/")
    }
};

const saveSubscription = (state, action) => {
    axios.post("http://localhost:8080/crypto-tracker/subscriptions/create_subscription?currencyId=" + action.currencyId);
    //alert("sosi" + action.currencyId);
    return state;
};


export const saveSubscriptionCreator = (currencyId) => {
    return {
        type: SAVE_SUBSCRIPTION,
        currencyId: currencyId
    }
};


export default allCurrenciesReducer;