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
            messages: messages,
            stats: stats
        }
    }

    render () {
        return (
            <main className='homeBody'>
                <Typography variant='h1'>HOME</Typography>
                <div>
                    <Typography variant='h3'>Stats</Typography>
                    <div className='statsBody'>
                        <Stats stats = {this.state.stats}/>
                    </div>
                    <Typography variant='h3'>Message Board</Typography>
                    <div className='messageBody'>
                        <MessageBoard messages={this.state.messages}/>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Home);