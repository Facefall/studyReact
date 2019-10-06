import React,{Component} from "react";

class Head extends Component{

    handleClick=()=>{
        // console.log(a.target);
    };

    render() {
        return(
            <div>
                <h3
                    onClick={this.handleClick}
                    className="head-list">head组件</h3>
            </div>
        )
    }
}
export default Head;
