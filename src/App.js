import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import Content from "./content/Content";
import "./App.css"

class App extends Component {
    render() {
        return (
            <div className="App-layout">
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;
