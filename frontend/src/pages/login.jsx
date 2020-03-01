import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import '../style/login.scss'
import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    createAccount() {

    }

    render () {
        return (
            <Box className="loginForm">
                <h2 className="title">Login to Home</h2>
                <TextField className='upField' id='standard-basic' label='Username'/>
                <TextField className='upField' id='standard-basic' label='Password'/>
                <Button className='loginButton'>
                    Login
                </Button>
                <p className='createAccount'>New to the House?<span className='createAccountBtn' onClick={this.createAccount}> Create Account!</span></p>
            </Box>
        );
    }
}

export default Login;