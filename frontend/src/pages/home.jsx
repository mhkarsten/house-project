import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import '../style/home.scss'
import Timeline from '../components/timeline'
import MessageBoard from '../components/messageBoard'
import Stats from '../components/stats'

const stats = [
    {
        name: "Corona cases",
        checked: false,
        value: 252432
    },
    {
        name: "Joints Smoked",
        checked: false,
        value: 420
    },
    {
        name: "Fucks Given",
        checked: false,
        value: 0
    }
]

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