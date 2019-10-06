import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

import Head from "./component/head/index.jsx";
import Main from "./component/main/index.jsx";
import Foot from "./component/foot/index.jsx";



class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <Head></Head>
                        <Main></Main>
                        <Foot></Foot>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </div>
        );
    }
}

export default App