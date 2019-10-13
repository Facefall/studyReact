import Home from "../component/home";
import News from "../component/news";
import User from "../component/user";
import Not404 from "../component/not404";
import Newsdetails from "../component/newsdetails";
let path = '/news';
const routers = [
    {
        exact:true,
        path:'/',
        component:Home
    },
    {
        exact:false,
        path:'/news',
        component:News,
        children:[
            {
                exact:true,
                path:`${path}/newsdetails`,
                component:Newsdetails
            },
            {
                exact:false,
                path:`${path}/newsdetails/:id`,
                component:Newsdetails
            },
            {
                exact:false,
                path:`*`,
                component:Not404
            }
        ]
    },
    {
        exact:false,
        path:'/user',
        component:User
    },
    {
        exact:false,
        component:Not404
    }
];
export default routers;