
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
        type:ADD_NUM,
    }
}

export function removeNum(){
    return {
        type:REMOVE_NUM,
    }
}

export function removeAsnyc() {
    return dispatch => {
        setTimeout(()=>{
            dispatch(removeNum())
        },1000)
    }
}
