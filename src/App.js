import React, {Component} from 'react';
import Header from "./header/Header";
import MyCurrencies from "./content/myCurrencies/MyCurrencies"
import "./App.css"
import {BrowserRouter, Route} from "react-router-dom";
import AllCurrencies from "./content/allCurrencies/AllCurrencies";
import HeaderStart from "./headerStart/HeaderStart";
import LogIn from "./content/logIn/LogIn";

import SignPage from "./signPage/SignPage"
import SignUp from "./content/signUp/SignUp";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App-layout">
                    <div>
                        <Route exact path = "/" component={HeaderStart}/>
                        <Route path = "/myCurrencies" component={Header}/>
                        <Route path = "/allCurrencies" component={Header}/>
                        <Route path = "/SignUp" component={SignPage}/>
                    </div>
                    <div>
                        <Route path = "/allCurrencies" component={AllCurrencies}/>
                        <Route path = "/myCurrencies" component={MyCurrencies}/>
                        <Route exact path = "/" component={LogIn}/>
                        <Route path = "/SignUp" component={SignUp}/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
