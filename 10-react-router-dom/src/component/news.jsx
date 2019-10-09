import React, {Component} from 'react';
import {
    Redirect,
    Link
} from "react-router-dom";


class News extends Component {
    state = {
        is_login:true
    };

    // getData = () =>{
    //     setTimeout(()=>{
    //         this.setState({
    //             is_login :false
    //         })
    //     },1000)
    // };

    componentDidMount() {
        // this.getData()
    }

    render() {
        return (
            <div>
                <h2>News页面</h2>
                {
                    // this.state.is_login === false && (
                     //   <Redirect to={'/user'} />
                    // )
                }
                <ol>
                    <li><Link to={'/newsdetails/111'}><h3>新闻111</h3></Link> </li>
                    {/*<li><Link to={'/newsdetails?id=111'}><h3>新闻111</h3></Link> </li>*/}
                    <li><Link to={'/newsdetails/222'}><h3>体育222</h3></Link> </li>
                    {/*<li><Link to={'/newsdetails?id=222'}><h3>体育222</h3></Link> </li>*/}
                    {/*<li><Link to={'/newsdetails?id=332'}><h3>娱乐332</h3></Link> </li>*/}
                    <li><Link to={'/newsdetails/332'}><h3>娱乐332</h3></Link> </li>
                </ol>
            </div>
        );
    }
}

export default News;