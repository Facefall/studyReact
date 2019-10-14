import React, {Component} from 'react';
import './static/css/index.css';
import {connect} from "react-redux";
import {addNum,removeAsnyc,removeNum} from "./redux4";

//连接器 装饰器 简化代码

//store.getState
//store.subScribe
//store.dispatch

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(this.props);
        // this.props.store.subscribe(this.render)
        // const {store} = this.props;
        // store.subscribe(App.render);
    // }



    render() {
        const {add,remove,store,rmAsnyc} = this.props;
        // console.log(store,add,remove);
        return (
            <div>
                <h1>hello react</h1>
                <hr/>
                <h2>
                    {store.getState()}
                </h2>
                <hr/>
                <input
                    type="button"
                    onClick={()=>{store.dispatch(add())}}
                    defaultValue={'增加意大利炮'}
                />
                <hr/>
                <input
                    type="button"
                    onClick={()=>{store.dispatch(remove())}}
                    defaultValue={'减少意大利炮'}
                />
                <hr/>
                <input
                    type="button"
                    onClick={()=>{store.dispatch(rmAsnyc())}}
                    defaultValue={'减少意大利炮'}
                />
            </div>
        )
    }
}

export default App;
//把state 映射到props中
//把redux中reducer返回的状态映射到react中的props
const mapStateProps = state =>{

    return {xyz:state}//state=>store.getState reducer返回的状态
};
//把各种Dispatch变成props
//让this.props能够使用
const  mapDispatchToProps = {
    addNum,
    removeNum,
    removeAsnyc
};

App = connect(mapStateProps)(App);
//生成一个新的组件