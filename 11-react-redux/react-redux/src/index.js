import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

// import './redux1';
// import './redux2';
import './redux4';
import thunk from "redux-thunk";
import {createStore,applyMiddleware,compose} from "redux";
import {reducer,addNum,removeNum,removeAsnyc} from "./redux4";
import {Provider} from "react-redux";
//高阶组件 负责处理数据的容器组件


const devToolExtension = window.devToolsExtension?window.devToolsExtension():()=>{};


// const store =  createStore(reducer);
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        devToolExtension
    )
);

render();
function render() {
    ReactDOM.render(
        <Provider
            store = {store}>
            <App
            />
        </Provider>
        ,
        document.getElementById('root')
    );
}
store.subscribe(render);


