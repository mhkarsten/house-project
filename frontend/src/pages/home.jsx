import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import '../style/home.scss'
import MessageBoard from '../components/messageBoard'
import Stats from '../components/stats'
import { homeActions } from '../actions/homeActions';

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
                        <Stats stats={this.props.stats}
                               increaseStats={this.props.increaseStats}
                               decreaseStats={this.props.decreaseStats}
                               deleteStats={this.props.deleteStats}
                               selectStat={this.props.selectStats}
                               newStat={this.props.newStats}/>
                    </div>
                    <Typography variant='h3'>Message Board</Typography>
                    <div className='messageBody'>
                        <MessageBoard posts={this.props.posts} 
                                      newPost={this.props.newPost}/>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        stats: state.stats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseStats: () => {dispatch(homeActions.incrementStats())},
        decreaseStats: () => {dispatch(homeActions.decrementStats())},
        deleteStats: () => {dispatch(homeActions.deleteStats())},
        selectStats: (statName, checked) => {dispatch(homeActions.selectStat(statName, checked))},
        newStats: (statName, statValue) => {dispatch(homeActions.newStat(statName, statValue))},

        newPost: (poster, postDate, postTitle, postBody) => {dispatch(homeActions.newPost(poster, postDate, postTitle, postBody))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);