
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import React from 'react'
import { connect } from 'react-redux'
// import Colors from 'colors'
import '../style/login.scss'
import { loginActions } from '../actions/loginActions'
import { homeActions } from '../actions/homeActions'


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        }

        this.submitLogin = this.submitLogin.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.formRef = React.createRef();
    }

    loginChange (e) {
        const {name, value} = e.target;
        this.setState({ [name]: value })
    }

    submitLogin (e) {
        e.preventDefault();

        const { userName, password } = this.state;

        if (userName && password) {
            this.props.login(userName, password)
        }
    }

    render () {
        return (
            <form className='loginForm' onSubmit={this.submitLogin} submit='this.submitLogin'> 
                <h2 className="title">Login to Home</h2>
                <TextField className='upField' id='standard-basic' label='Username' name='userName' onChange={this.loginChange}/>
                <TextField className='upField' id='standard-basic' label='Password' name='password' onChange={this.loginChange}/>
                <Button className='loginButton' color='primary' type='submit'>
                    Login
                </Button>
                <p className='createAccount'>New to the House?<span className='createAccountBtn' onClick={this.createAccount}> Create Account!</span></p>
            </form>
        );
    }
}

const mapStateToProps = (state) => { //READ STATE
    return {
        userName: state.userName,
        password: state.password
    }
}

const mapDispatchToProps = (dispatch) => { //WRITE STATE

    return {
        login: (userName, password) => {dispatch(loginActions.login(userName, password))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Login);