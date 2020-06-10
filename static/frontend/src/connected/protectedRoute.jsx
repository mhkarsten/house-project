import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

class ProtectedRoute extends React.Component {
  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route 
        {...props} 
        render = {props => (
          this.props.authenticated.loggedIn ?
            <Component {...props} /> :
            <Redirect to='/login' />
        )} 
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.loginReducer
  }
}

export default connect(mapStateToProps)(ProtectedRoute);