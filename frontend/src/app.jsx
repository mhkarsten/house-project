import React from 'react';
import {
  BrowserRouter as Router,
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

// function requireAuth() {
//   if() {

//   }
// }

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/login' component={Login}/>
          <ProtectedRoute path='/home' component={Home}/>
          <ProtectedRoute path='/builds' component={Builds}/>
        </Switch>
    </Router>
  );
}

export default App;
