import React, {Component} from 'react';
import List from "../list/index.jsx";

class Content extends Component{
    constructor() {
        super(...arguments);
        this.state = {
            onOff:this.props.show
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (this.state.onOff !== nextProps.show) {
            this.setState({
                onOff:nextProps.show
            });
        }
        if (this.state.onOff !== nextState.onOff){
            this.toggleList(nextState.onOff);
        }
        return true;
    }

    componentDidMount() {
        this.toggleList(this.state.onOff)
    }

    toggleList = (onOff) =>{
        let ele = this._list;
        if (onOff)  ele.style.height = ele.scrollHeight + "px";
        else        ele.style.height = 0;
    };

    handleClick = (i) => {
        const onOff = !this.state.onOff;
        this.setState({
            onOff
        });
        this.toggleList(onOff);
        this.props.handleChange(i);
    };

    render() {
        let {name,list} = this.props;
        return (
            <div
                key={this.props.index}>
                <h2 onClick={()=>{this.handleClick(this.props.index)}}>{name}</h2>
                <div
                    className="list"
                    ref={item=>this._list=item}>
                    <List  list={list}></List>
                </div>
            </div>
        );
    }
}


export default Content;