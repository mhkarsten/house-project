import React from 'react';
import {
  Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import './style/app.scss';
import Home from './pages/home'
import Login from './pages/login'
import Builds from './pages/builds'
import ProtectedRoute from './components/protectedRoute'
import NotFound from './pages/notFound'
import { history } from './store'

function requireAuth() {
  // if() {

  // }
}

function App() {
  return (
    <Router history={history}>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path='/login' component={Login} onEnter={requireAuth}/>
          {/* <Route path='*' component={NotFound}/> */}
          <ProtectedRoute path='/home' component={Home}/>
          <ProtectedRoute path='/builds' component={Builds}/>
        </Switch>
    </Router>
  );
}

export default App;
