import React, {Component} from 'react';
import Header from "./header/Header";
import MyCurrencies from "./content/myCurrencies/MyCurrencies"
import "./App.css"
import {BrowserRouter, Route} from "react-router-dom";
import AllCurrencies from "./content/allCurrencies/AllCurrencies";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App-layout">
                <Header/>
                <div>
                    <Route path = "/allCurrencies" component={AllCurrencies}/>
                    <Route path = "/myCurrencies" component={MyCurrencies}/>
                </div>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;
