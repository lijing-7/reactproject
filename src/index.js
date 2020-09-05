import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import {mainRoutes} from "./routes";
ReactDOM.render(
    <Router>
        <Switch>
            {mainRoutes.map(route=>{
                return <Route key={route.path} {...route}></Route>
            })}
            <Redirect to="/404"/>
        </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
