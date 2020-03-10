import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import '../style/home.scss'
import Timeline from '../components/timeline'
import MessageBoard from '../components/messageBoard'
import Stats from '../components/stats'

const messages = [
    {
        sender: 'Daniel',
        time: '12/3/19',
        body: 'Hugo is gay!'
    },
    {
        sender: 'Peter',
        time: '24/8/17',
        body: 'Hugo is gay!'
    },
    {
        sender: 'Hugo',
        time: '12/3/99',
        body: 'Hugo is gay!'
    }
]

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: messages
        }
    }

    render () {
        return (
            <main className='homeBody'>
                <Typography variant='h1'>HOME</Typography>
                <div className='statsBox'>
                    <div>
                        <Typography variant='h3'>Stats</Typography>
                        <Stats />
                    </div>
                    <div className='messageBox'>
                        <Typography variant='h3'>Message Board</Typography>
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