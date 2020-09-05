import Login from "../login";
import Pagenotfound from "../pagenotfound";
import Home from "../pages/home";
import Booklist from "../pages/book/booklist";

export const mainRoutes=[
    {path:'/login',component:Login},
    {path:'/404',component: Pagenotfound}
]

export const pageRoutes=[
    {path:'/home',component:Home},
    {path:'/booklist/:id',component: Booklist}
]