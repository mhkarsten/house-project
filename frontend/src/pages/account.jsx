import React from 'react'
import { Typography, Avatar, Tooltip, TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import '../style/account.scss'
import Contribution from '../components/contribution'

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
                                <Typography>{this.props.user.username}</Typography>
                            </div>
                            <div className='changeIconBox'>
                                <Typography>Change Icon</Typography>
                                <form>
                                    <TextField label='Link to New Image'/>
                                    <Button>Change</Button>
                                </form>
                            </div>
                            <div className='changePasswordBox'>
                                <Typography>Change Password</Typography>
                                <form>
                                    <TextField label='Old Password'/>
                                    <TextField label='New Password'/>
                                    <TextField label='Repeat'/>
                                    <Button>Change</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Typography variant='h3'>My Contributions</Typography>
                        <div className='contribBox'>
                            <Contribution>

                            </Contribution>
                            <Contribution>

                            </Contribution>
                            <Contribution>

                            </Contribution>
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
        user: state.user.user,
        posts: state.posts.posts,
        stats: state.stats.stats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Account)