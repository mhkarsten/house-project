import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../store'

class ProtectedRoute extends React.Component {

    render() {
      const { component: Component, ...props } = this.props
      return (
        <Route 
          {...props} 
          render = {props => (
            store.getState().loginReducer.loggedIn ?
              <Component {...props} /> :
              <Redirect to='/login' />
          )} 
        />
      )
    }
  }

export default ProtectedRoute