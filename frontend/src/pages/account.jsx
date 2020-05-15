import React, {setState} from 'react'
import { Typography, Avatar, Tooltip, TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'

import '../style/account.scss'
import Contribution from '../components/contribution'
import { userPostSelector, userStatSelector } from '../selectors/accountSelector'
import { accountActions } from '../actions/accountActions'

class Account extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            oldPassword: '',
            newPassword: '',
            newPasswordRepeat: '',
            newIcon: ''
        }
        this.changeIcon = this.changeIcon.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.updateIcon = this.updateIcon.bind(this)
    }

    changePassword(event) {
        event.preventDefault()
    }

    updatePassword(event) {
        switch(event.target.name) {
            case 'oldPwd':
                this.setState({oldPassword: event.target.value})
            case 'newPwd':
                this.setState({newPassword: event.target.value})
            case 'newPwdRepeat':
                this.setState({newPasswordRepeat: event.target.value})
        }   
    }

    changeIcon(event) {
        event.preventDefault()
    }

    updateIcon(event) {
        this.setState({newIcon: event.target.value})
    }
    

    render() {
        return (
            <main className='accountBody'>
                <Typography variant='h1'>Account</Typography>
                <div>
                    <div>
                        <Typography variant='h3'>Account Info</Typography>
                        <div className='infoBox'>
                            <div>
                                <Tooltip title='Change Avatar'>
                                    <Avatar alt='Remy Sharp' className='profileIcon' src={this.props.user.icon}/>
                                </Tooltip>
                                <Typography>{this.props.user.username}</Typography>
                            </div>
                            <div className='changeIconBox'>
                                <Typography>Change Icon</Typography>
                                <form onSubmit={this.changeIcon}>
                                    <TextField label='Link to New Image'/>
                                    <Button type='submit'>Change</Button>
                                </form>
                            </div>
                            <div className='changePasswordBox'>
                                <Typography>Change Password</Typography>
                                <form onSubmit={this.changePassword}>
                                    <TextField label='Old Password' name='oldPwd' onChange={this.updatePassword}/>
                                    <TextField label='New Password' name='newPwd' onChange={this.updatePassword}/>
                                    <TextField label='Repeat' name='newPwdRepeat' onChange={this.updatePassword}/>
                                    <Button type='submit'>Change</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Typography variant='h3'>My Contributions</Typography>
                        <div className='contribBox'>
                            <Contribution type='stats' contribs={this.props.stats}/>
                            <Contribution type='posts' contribs={this.props.posts}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        posts: userPostSelector(state),
        stats: userStatSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeIcon: (newIcon) => {dispatch(accountActions.changeIcon, newIcon)},
        changePassword: (newPassword, oldPassword) => {dispatch(accountActions.changePassword(newPassword, oldPassword))},
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Account)