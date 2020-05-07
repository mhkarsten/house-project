import React from 'react';
import { connect } from 'react-redux';
import '../style/builds.scss'
import { Typography } from '@material-ui/core';

class Builds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <main className='buildBody' gutterButtom>
                <Typography variant='h1'>BUILDS</Typography>
                <div>
                    <div>
                        <Typography variant='h3'>All Builds</Typography>
                        <div className='allBuildBox'>
                            //info goes here//
                        </div>
                    </div>
                    <div>
                        <Typography variant='h3'>My Builds</Typography>
                        <div className='myBuildBox'>
                            //info goes here//
                        </div>
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

export default connect(mapStateToProps)(Builds);