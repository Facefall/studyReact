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

//进一步简化写法
//需要配置babel
//ejetc暴露接口
//在package.json的babel中添加
//babel-plugin-transform-decorators-legacy

//期间npm run eject 出现错误
//原因 主要是脚手架添加 .gitgnore文件，但是却没有本地仓库
//解决:
// git init
// git add .
// git commit -m "saving before ejecting"
// npm run eject

export default App;
