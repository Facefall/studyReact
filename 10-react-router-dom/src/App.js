import React, {Component} from 'react';
import {
    Route,
    // Router,
    // Link,
    NavLink,
    BrowserRouter as Router,
    // StaticRouter,
    Switch,
    // HashRouter
} from 'react-router-dom';
import './static/css/index.css';
import  "./component/index.css";

import Home from "./component/home.jsx";
import User from "./component/user";
import News from "./component/news";
import Not404 from "./component/not404";
import Newsdetails from "./component/newsdetails";


class App extends Component {

    render() {
        return (
            /*
            <BrowserRouter>
               <div>
                       路由到user 或者news
                       会出现home组件(根组件)与自身组件

                       原因:匹配不精准

                       解决办法:
                       组件添加属性exact 精准匹配根组件

                       不精准匹配
                       匹配不止一条路由
                       从上至下

                       如果想只匹配一个组件
                       用switch,不用BrowserRouter


                   <Route exact path='/' component={Home} />
                   <Route path='/User' component={User} />
                   <Route path='/News' component={News} />
                   <Home />
                   <User />
                   <News />
               </div>
            </BrowserRouter>
            * */
            <Router>
                <div>
                    {/*<link><div>23</div></link>*/}
                    {/*
                    path 是路由参数
                    localhost:3000/
                    localhost:3000/user
                    localhost:3000/news

                    Link -> a标签
                    to表示路由参数
                    https://reacttraining.com/react-router/web/api/Link


                */}

                    {/*
                        NavLink 向子组件传值
                        1 get传值
                        2 动态路由  根据路由传递参数
                        3 localstorage
                    */}
                    <hr/>
                    <NavLink exact activeClassName={'home'} to={'/'}> Home</NavLink>
                    <br/>
                    <NavLink to={'/news'}> News</NavLink>
                    <br/>
                    <NavLink to={'/user'}> User</NavLink>
                    <br/>
                    <hr/>
                </div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/user' component={User}/>
                    <Route path='/news' component={News}/>
                    <Route path='/newsdetails/:news_id' component={Newsdetails} />
                    {/*<Route path='/newsdetails' component={Newsdetails} />*/}
                    <Route component={Not404} />
                </Switch>
            </Router>
        )
    }
}

export default App;
