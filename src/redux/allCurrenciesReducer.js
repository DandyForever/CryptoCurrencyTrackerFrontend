import axios from 'axios'

const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
const FETCH_CURRENCIES_PENDING = 'FETCH_CURRENCIES_PENDING';
const FETCH_CURRENCIES_REJECTED = 'FETCH_CURRENCIES_REJECTED';
const FETCH_CURRENCIES_FULFILLED = 'FETCH_CURRENCIES_FULFILLED';

const initialState = {
    mustFetch: true,

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
                fetched: true,
                currencies: action.payload.data
            };

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

export default allCurrenciesReducer;