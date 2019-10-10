import React, {Component} from 'react';
import {
    // Redirect,
    NavLink,
    Route,
    Switch
} from "react-router-dom";

// import Newsdetails from "./newsdetails.jsx";
// import Not404 from "./not404";
// import routers from "../router/index.js";


class News extends Component {
    state = {
        is_login: true
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
        console.log(this.props);
        const path = this.props.match.path;
        const routers = this.props.routers;
        // const path = "/news";
        return (
            <div className={'news'}>
                <h2>News页面</h2>
                {
                    // this.state.is_login === false && (
                    //   <Redirect to={'/user'} />
                    // )
                }
                <div className={'navlist'}>
                    <ol>
                        {/*<li><Link to={'/newsdetails/111'}><h3>新闻111</h3></Link> </li>*/}
                        {/*<li><Link to={'/newsdetails?id=111'}><h3>新闻111</h3></Link> </li>*/}
                        {/*<li><Link to={'/newsdetails/222'}><h3>体育222</h3></Link> </li>*/}
                        {/*<li><Link to={'/newsdetails?id=222'}><h3>体育222</h3></Link> </li>*/}
                        {/*<li><Link to={'/newsdetails?id=332'}><h3>娱乐332</h3></Link> </li>*/}
                        {/*<li><Link to={'/newsdetails/332'}><h3>娱乐332</h3></Link> </li>*/}
                        <li><NavLink to={`${path}/newsdetails/111`}><h3>新闻111</h3></NavLink></li>
                        <li><NavLink to={`${path}/newsdetails/222`}><h3>体育222</h3></NavLink></li>
                        <li><NavLink to={`${path}/newsdetails/333`}><h3>娱乐332</h3></NavLink></li>
                    </ol>
                    <div className={'con'}>
                        {/*<Route path='/news/newsdetails/:id' component={Newsdetails} />*/}
                        <Switch>
                            {
                                routers.length > 0 && routers.map((item, index) => {
                                    // if (item.exact === true)
                                        return (<Route key={index} exact={item.exact} path={`${item.path}`} component={item.component}/>)

                                    // if (item.path === null)
                                    //     return (<Route key={index} path={`${path}/newsdetails/:id`} component={item.component}/>)
                                    // return <Route key={index} path={`${item.path}`} component={item.component} />
                                })
                            }
                            {/*<Route exact path={`${path}`} component={Newsdetails} />*/}
                            {/*<Route path={`${path}/`} component={Not404} />*/}
                        </Switch>

                        {/*<Route path='/news/newsdetails/222' component={Newsdetails} />*/}
                        {/*<Route path='/news/newsdetails/333' component={Newsdetails} />*/}
                    </div>
                </div>

            </div>
        );
    }
}

export default News;