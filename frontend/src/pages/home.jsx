import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import '../style/home.scss'
import Timeline from '../components/timeline'
import MessageBoard from '../components/messageBoard'
import Stats from '../components/stats'
import homeActions from '../actions/homeActions'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <main className='homeBody'>
                <Typography variant='h1'>HOME</Typography>
                <div>
                    <Typography variant='h3'>Stats</Typography>
                    <div className='statsBody'>
                        <Stats stats = {this.props.stats}/>
                    </div>
                    <Typography variant='h3'>Message Board</Typography>
                    <div className='messageBody'>
                        <MessageBoard messages={this.props.messages}/>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.homeReducer.messages,
        stats: state.homeReducer.stats
    }
}

export default connect(mapStateToProps)(Home);