import {fetchCurrenciesCreator, saveSubscriptionCreator} from "../../redux/allCurrenciesReducer";
import AllCurrencies from "./AllCurrencies";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        currencies: state.allCurrencies.currencies
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrencies: () => {
            dispatch(fetchCurrenciesCreator());
        },

        saveSubscription: (currencyId) => {
            dispatch(saveSubscriptionCreator(currencyId));
        }
    }
};

let AllCurrenciesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCurrencies);

export default AllCurrenciesContainer;