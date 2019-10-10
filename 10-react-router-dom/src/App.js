import React, {Component} from 'react';
import {
    Route,
    // Router,
    // Link,
    // HashRouter as Router,
    //hashRouter 不会更新页面
    NavLink,
    BrowserRouter as Router,
    // StaticRouter,
    Switch,
    // HashRouter
} from 'react-router-dom';
import './static/css/index.css';
import "./component/index.css";

// import Home from "./component/home.jsx";
// import User from "./component/user";
// import News from "./component/news";
// import Not404 from "./component/not404";
// import Newsdetails from "./component/newsdetails";
import routers from "./router/index.js";

// import Home from "./component/home";


class App extends Component {
    getData = () => {
        const arr = [
            {
                to: '/',
                exact: true,
                con: "Home"
            },
            {
                to: '/news',
                con: "News"
            },
            {
                to: '/user',
                con: "User"
            }
        ];
        return arr;
    };

    render() {
        const data = this.getData();

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
                <div className={'topNav'}>
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
                    {/*<NavLink  exact activeClassName={'home'} to={'/'}> Home</NavLink>*/}
                    {/*<NavLink  to={'/news'}> News</NavLink>*/}
                    {/*<NavLink  to={'/user'}> User</NavLink>*/}
                    {
                        data.map((item, index) => {
                            // return (<NavLink key={index} to={item.to}>{item.con}</NavLink>)
                            return (<NavLink key={index}
                                             {...item}>{item.con}</NavLink>)
                        })
                    }
                </div>
                <Switch>
                    {/*<Route exact path='/' component={Home}/>*/}
                    {/*<Route path='/user' component={User}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/newsdetails' component={Newsdetails} />*/}
                    {/*<Route component={Not404} />*/}
                    {
                        // routers.map((item,index) => {
                        //     if(item.exact === true)  return <Route key={index} exact={item.exact} path={item.path} component={item.component} />
                        //     return <Route key={index} path={item.path} component={item.component} />
                        //     return <Route key={index} {...item} />
                    })
                    }
                    {/*<Route key={index} path={item.path} component={item.component}></Route>)*/}

                    {
                        routers.map((item, index) => {
                            if (item.exact) {
                                return (<Route exact={item.exact} key={index} path={item.path}
                                               component={item.component}  />)
                            }
                            console.log(item);
                            return (
                                <Route key={index} path={item.path} render={(props) => {
                                    return <item.component {...props} routers={item.children}/>
                                }}/>);
                        })
                    }


                </Switch>
            </Router>
        )
    }
}

export default App;
