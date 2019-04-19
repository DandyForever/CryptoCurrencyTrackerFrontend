import React from 'react';
import Header from "./header/Header";
import MyCurrencies from "./content/myCurrencies/MyCurrencies"
import "./App.css"
import {Route, Router} from "react-router-dom";
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
                        <Route exact path = "/" render = {() => <HeaderStart/>}/>
                        <Route path = "/myCurrencies" render = {() => <Header/>}/>
                        <Route path = "/allCurrencies" render = {() => <Header/>}/>
                        <Route path = "/SignUp" render = {() => <SignPage/>}/>
                    </div>
                    <div>
                        <Route path = "/allCurrencies" render = {() => <AllCurrenciesContainer store={props.store}/>}/>
                        <Route path = "/myCurrencies" render = {() => <MyCurrencies/>}/>
                        <Route exact path = "/" render = {() => <LogIn/>}/>
                        <Route path = "/SignUp" render = {() => <SignUp/>}/>
                    </div>
                </div>
            </Router>
        );
};

export default App;