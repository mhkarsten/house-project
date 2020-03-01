import React from 'react'
import {Route, Redirect} from 'react-router-dom'

class ProtectedRoute extends React.Component {
    render() {
      const { component: Component, ...props } = this.props
  
      return (
        <Route 
          {...props} 
          render={props => (
            this.state.authenticated ?
              <Component {...props} /> :
              <Redirect to='/login' />
          )} 
        />
      )
    }
  }

  export default ProtectedRoute