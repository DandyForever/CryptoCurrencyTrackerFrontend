import React, {Component} from 'react';
import Header from "./header/Header";
import MyCurrencies from "./content/myCurrencies/MyCurrencies"
import "./App.css"
import {BrowserRouter, Route, Router} from "react-router-dom";
import AllCurrencies from "./content/allCurrencies/AllCurrencies";
import HeaderStart from "./headerStart/HeaderStart";
import LogIn from "./content/logIn/LogIn";

import SignPage from "./signPage/SignPage"
import SignUp from "./content/signUp/SignUp";
import AllCurrenciesContainer from "./content/allCurrencies/AllCurrenciesContainer";
import syncHistoryWithStore from "react-router-redux/src/sync";
import {browserHistory, store} from "./redux/reduxStore";

const history = syncHistoryWithStore(browserHistory, store);

const App = (props) => {
        return (
            <Router history={history}>
                <div className="App-layout">
                    <div>
                        <Route exact path = "/" component={HeaderStart}/>
                        <Route path = "/myCurrencies" component={Header}/>
                        <Route path = "/allCurrencies" component={Header}/>
                        <Route path = "/SignUp" component={SignPage}/>
                    </div>
                    <div>
                        <Route path = "/allCurrencies" render = {() => <AllCurrenciesContainer store={props.store}/>}/>
                        <Route path = "/myCurrencies" component={MyCurrencies}/>
                        <Route exact path = "/" component={LogIn}/>
                        <Route path = "/SignUp" component={SignUp}/>

                    </div>
                </div>
            </Router>
        );
};

export default App;