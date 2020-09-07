import Login from "../login";
import Pagenotfound from "../pagenotfound";
import Home from "../pages/home";
import Booklist from "../pages/book/booklist";
import App from "../App";
import Bookedit from "../pages/book/bookedit";
export const mainRoutes=[
    {path: '/login', component: Login},
    {path: '/404', component: Pagenotfound}
]

export const pageRoutes=[
    {path: '/bookmanager/home', component: Home,title:'主页',isShow:true,Icon:"home"},
    {path: '/bookmanager/booklist', component: Booklist,title:'书籍管理',isShow:true,Icon:"book"},
    {path: '/bookmanager/booklist/edit/:id', component: Bookedit, exact: true},
    {path: '/bookmanager/user', component: Booklist, exact: true,title:'用户管理',isShow:true,Icon:"user"},
]