import {fetchCurrenciesCreator} from "../../redux/allCurrenciesReducer";
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
      }
  }
};

let AllCurrenciesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCurrencies);

export default AllCurrenciesContainer;