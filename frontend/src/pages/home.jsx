import React from 'react';
import { connect } from 'react-redux';
import '../style/home.scss'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <main className='homeBody'>
                <div>
                    Event Log
                </div>
                <div>
                    Message Board
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