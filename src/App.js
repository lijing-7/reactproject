import React from 'react';
import './App.css';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {pageRoutes} from './routes';
import Frame from "./component/Frame/index";
function App() {
  return (
    <Frame className="App">
      <Router>
        <Switch>
          {pageRoutes.map(route=>{
            return (<Route key={route.path} path={route.path} exact={route.exact}
                           render={routeprops=>{
                           return  <route.component  {...routeprops}/>
                           }
                           }></Route>)
          })}
          <Redirect to='/404' />
        </Switch>
      </Router>
    </Frame>
  );
}

export default App;
