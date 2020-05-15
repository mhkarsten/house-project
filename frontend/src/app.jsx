import React from 'react';
import {
  Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'


import './style/app.scss';
import { history } from './store'
import Home from './pages/home'
import Login from './pages/login'
import Builds from './pages/builds'
import Account from './pages/account'
import ProtectedRoute from './connected/protectedRoute'
import NotFound from './pages/notFound'
import Nav from './connected/nav'
import Network from './pages/network'
import HUGO from './pages/HUGO'

function App() {
  return (
    <Router history={history}>
      <Route path='/home' component={Nav}/>
      <Switch>
        <Redirect exact from="/" to="/login"/>
        <Route path='/login' component={Login}/>
        <ProtectedRoute exact path='/home' component={Home}/>
        <ProtectedRoute exact path='/home/builds' component={Builds}/>
        <ProtectedRoute exact path='/home/account' component={Account}/>
        <ProtectedRoute exact path='/home/net' component={Network}/>
        <ProtectedRoute exact path='/home/HUGO' component={HUGO}/>
        <ProtectedRoute component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
