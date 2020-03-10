import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import { Divider, ListItem, ListItemText, List } from '@material-ui/core';

class Nav extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentTab: 'home',

        }
    }

    setCurrentTab (nextTab) {
        this.setState({currentTab: nextTab})
    }

    render () {
        return (
            <nav>
                <Drawer
                    open={true}
                    variant='permanent'
                    anchor='left'>
                    <Divider />
                    <List>
                        <ListItem button component={Link} to='/home'>
                            <ListItemText primary='Home'/>
                        </ListItem>
                        <ListItem button component={Link} to='/home/builds'>
                            <ListItemText primary='Builds'/>
                        </ListItem>
                        <ListItem button component={Link} to='/home/lights'>
                            <ListItemText primary='Lights'/>
                        </ListItem>
                        <ListItem button component={Link} to='/home/sat'>
                            <ListItemText primary='Satalite'/>
                        </ListItem>
                        <ListItem button component={Link} to='/home/net'>
                            <ListItemText primary='Networking'/>
                        </ListItem>
                    </List>
                </Drawer>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentTab: state.currentTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);