import React, {Component} from 'react';
import {connect} from "react-redux";

import {addNum,removeAsnyc,removeNum} from "./redux4";


class App extends Component {

    render() {
        return (
            <div>
                <h1>hello redux</h1>
                <hr/>
                <h2>
                    {this.props.xyz}
                </h2>
                <hr/>
                <input
                    type="button"
                    onClick={()=>{
                        // store.dispatch(add())
                        this.props.addNum();
                        // console.log(this.state);
                    }}
                    defaultValue={'增加意大利炮'}
                />
                <hr/>
                <input
                    type="button"
                    onClick={()=>{
                        // store.dispatch(remove())
                        this.props.removeNum();
                        // console.log(this.props);
                    }}
                    defaultValue={'减少意大利炮'}
                />
                <hr/>
                <input
                    type="button"
                    onClick={()=>{
                        // store.dispatch(rmAsnyc())
                        this.props.removeAsnyc();
                    }}
                    defaultValue={'减少意大利炮'}
                />
            </div>
        )
    }
}

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

App = connect(mapStateProps,mapDispatchToProps)(App);
//生成一个新的组件

export default App;
