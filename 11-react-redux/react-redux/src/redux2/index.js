// import {createStore} from "redux";

// const store = createStore(reducer);

const ADD_NUM = '增加意大利炮';
const REMOVE_NUM = '减少意大利炮';

export function reducer(state=0,action) {
    switch  (action.type){
        case ADD_NUM://具体要执行的操作
            return state+1;
        case REMOVE_NUM:
            return state-1;
        default:
            return 100
    }
}

export function addNum(){
    return {
        type:ADD_NUM,//要做哪些操作 返回的对象在reducer中,对应形参action
    }
}

export function removeNum(){
    return {
        type:REMOVE_NUM,
    }
}

//一般情况返回对象
//redux做异步操作,返回函数
export function removeAsnyc() {
    //返回一个函数
    //接受一个参数 形参dispatch
    return dispatch => {
        setTimeout(()=>{
            dispatch(removeNum())
        },2500)
    }
}

// function asd(dispatch) {
//     setTimeout(()=>{
//         dispatch(removeNum())
//     },2500)
// }
//需要用到middleware 中间件
//需要安装 redux-thunk