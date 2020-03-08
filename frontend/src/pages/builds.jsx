import React from 'react';
import { connect } from 'react-redux';
import '../style/builds.scss'

class Builds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <main className='buildBody'>
                <div>
                    My Builds
                </div>
                <div>
                    Main Build Log
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Builds);