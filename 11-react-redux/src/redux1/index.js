import {createStore} from "redux";

//参数接受一个纯函数
//纯函数

//reducer 要做的行为 返回新状态
//(命令模式 订阅模式 观察者模式)
//定义行为action 或者说是函数 方法 增删改查
//返回数据

function reducer(state=0,action) {
    switch  (action.type){
        case '骑兵营':
            return state+5;
        case '意大利炮营':
            return state-1;
        default:
            return 0
    }
}

const store = createStore(reducer);
console.log(store.getState());

//派发事件 传递action
store.dispatch({
    type:'意大利炮营'
});
console.log(store.getState());

//订阅
function listener() {
    console.log('listener - 现在的状态:-',store.getState());
}
//监听状态的改变
//state发生改变则执行订阅的函数
store.subscribe(listener);
store.dispatch({
    type:'骑兵营'
});