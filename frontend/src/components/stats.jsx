import React from 'react'
import { Typography, TextField, Button, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import { useReducer } from 'react';
import homeReducer from '../reducers/homeReducer';
import {homeActions} from '../actions/homeActions'

const Stats = (props) => {
    const [stats, dispatch] = useReducer(homeReducer, props.stats)

    function increase(event) {
        dispatch(homeActions.incrementStats())
    }

    function decrease(event) {

    }

    function selectState(event) {
        dispatch(homeActions.selectStat(event.target.name, event.target.checked))
    }

    function newStat(event) {
        dispatch(homeActions.newStat)
    }

    function deleteStat() {

    }

    return (
        <div className='statsChangeBox'>
            <div className='incrementBox'>
                <div>
                    <Typography>Create New Stat</Typography>
                    <div className='createNewStat'>
                        <div className='statValues'>
                            <TextField id='standard-basic' label='Name of Stat'/>
                            <TextField id='standard-number' label='Initial Value' type='number'/>
                        </div>
                        <Button onClick={newStat}>Create</Button>
                    </div>
                </div>
                <div className='increaseExistingStat'>
                    <Typography>Manage Stats</Typography>
                    <Typography>Number of Stats: {0}</Typography>
                    <div className='increaseButtons'>
                        <Button onClick={increase}>Increase</Button>
                        <Button onClick={decrease}>Decrease</Button>
                        <Button onClick={deleteStat}>Delete</Button>
                    </div>
                </div>
            </div>
            <FormGroup className='statsBox'>
            {
                props.stats.map((stat, index) => {
                    return (
                        <div className='stat'>
                            <Typography>{stat.value}</Typography>
                            <FormControlLabel
                                control = {
                                    <Checkbox
                                        checked={stat.checked}
                                        onChange={addStatToList}
                                        name={stat.name}
                                    />
                                }
                                label={stat.name}
                                key={index}
                            />
                        </div>
                    );
                })
            }
            </FormGroup>
        </div>
    );
}

export default Stats