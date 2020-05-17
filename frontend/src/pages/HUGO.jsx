import React from 'react'
import { connect } from 'react-redux';
import Calendar from '../components/calendar/calendar'
import { Typography } from '@material-ui/core';

class HUGO extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <main className='buildBody' gutterButtom>
                <Typography variant='h1'>HUGO Predictor</Typography>
                <div>
                    <div>
                        <Typography variant='h3'>Overview</Typography>
                        <div className='allBuildBox'>
                            <Calendar/>
                        </div>
                    </div>
                    <div>
                        <Typography variant='h3'>New Entry</Typography>
                        <div className='myBuildBox'>
                            //info goes here//
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapDispatchToProps, mapStateToProps)(HUGO)