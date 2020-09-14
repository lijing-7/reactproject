import React from 'react';
import './App.css';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {pageRoutes} from './routes';
import Frame from "./component/Frame/index";
import {isLogin} from './util/auth'
function App() {
  return (
    isLogin()?<Frame className="App">
      <Router>
        <Switch>
          {pageRoutes.map(route=>{
            return (<Route key={route.path} path={route.path} exact={route.exact}
                           render={routeprops=>{
                           return  <route.component  {...routeprops}/>
                           }
                           }></Route>)
          })}
          <Redirect to={pageRoutes[0].path} from="/bookmanager" />
          <Redirect to='/404' />
        </Switch>
      </Router>
    </Frame>:<Redirect  to="/login"/>
  );
}

export default App;
