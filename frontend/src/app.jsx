import React from 'react';
import {
  BroweserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import './style/App.css';
import Home from './pages/home'
import Login from './pages/login'
import Builds from './pages/builds'
import ProtectedRoute from './components/protectedRoute'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/builds">About</Link>
            </li>
            <li>
              <Link to="/login">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/login' component={Login}/>
          <ProtectedRoute path='/home' component={Home}/>
          <ProtectedRoute path='/builds' component={Builds}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
