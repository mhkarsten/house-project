import React from 'react'
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Calendar from '../components/calendar/calendar'
import {HUGOEntriesSelector} from '../selectors/HUGOSelector'
import {HUGOActions} from '../actions/HUGOactions'


class HUGO extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDate: new Date(2020, 4, 1)
        }
    }
    
    render() {

        return (
            <main className='buildBody'>
                <Typography variant='h1'>HUGO Predictor</Typography>
                <div>
                    <div>
                        <Typography variant='h3'>Overview</Typography>
                        <div className='allBuildBox'>
                            <Calendar currentDate={this.state.currentDate} 
                                      HUGOEntries={this.props.HUGOEntries} 
                                      changeView={this.props.changeCalendarView}
                                      changeColor={this.props.changeColor}
                                      HUGOColor={this.props.HUGOColor}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        HUGOEntries: HUGOEntriesSelector(state),
        HUGOColor: state.HUGOEntries.HUGOColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCalendarView: (type, interval) => dispatch(HUGOActions.changeHugoView(type, interval)),
        changeColor: (colorMax, colorMin) => dispatch(HUGOActions.setHugoColor(colorMax, colorMin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HUGO)