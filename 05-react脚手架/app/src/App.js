// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

import Head from "./component/head/index.jsx";
import Main from "./component/main/index.jsx";
import Foot from "./component/foot/index.jsx";

import "./component/head/index.css";
//  引入css直接通过import引入即可
//  在js中定义声明实现的东西,可直接通过import引入,不需要export

class App extends Component {
    render() {
        console.log();
        return (
            <div>
                 <div className="App">
                    <header className="App-header">
                        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <Head></Head>
                        <Main></Main>
                        <Foot></Foot>
                        <img src={require('./static/img/logo.png')} alt=""/>
                        {/*
                            图片引入
                            使用require

                        */}
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