import React, {Component} from 'react';
// import Url from "url";

class Newsdetails extends Component {
    state = {
        test:1
    };

    componentWillMount() {
        this.onOff = true;
        if (this.onOff){
            setTimeout(()=>{
                this.setState({
                    test:2
                })
            },1000)
        }

    }

    componentDidMount() {
        // this.setState({
        //     test:23
        // })
        /*

        因为setState是异步的
        有延时
        所以当该组件被挂载的时候
        会延迟更新state

        而如果此时用户切换组件
        则组件被销毁
        会抛出警告,无法更改以及被销毁组件的state
        //解决方法

        */
    }

    componentWillUnmount() {
        this.setState = () => {      //不会更新state
            return false
        }

    }

    render() {
        // const id = Url.parse(this.props.location.search,true).query.id;
        //parse true -> query 得到get键值对
        // const id = this.props.location.search;
        // console.log(this.props.location);
        const id = this.props.match.params.id;
        return (
            <div>
                news detail
                <hr/>
                {id}
            </div>
        );
    }
}

export default Newsdetails;