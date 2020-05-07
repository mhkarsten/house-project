import React from 'react'
import { Typography, Avatar, Tooltip, TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import '../style/account.scss'

class Account extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            changePassword: false,
            changeIcon: false
        }
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
                            </div>
                            <div>
                                <Typography>{this.props.user.username}</Typography>
                                <Typography>Change Password</Typography>
                            </div>
                            <div>
                                <div>
                                    <Typography>Change Icon</Typography>
                                    <form>
                                        <TextField/>
                                        <Button>Change</Button>
                                    </form>
                                </div>

                                <div>
                                    <Typography>Change Username</Typography>
                                    <form>
                                        <TextField/>
                                        <TextField/>
                                        <TextField/>
                                        <Button>Change</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Typography variant='h3'>My Contributions</Typography>
                        <div className='contribBox'>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Account)