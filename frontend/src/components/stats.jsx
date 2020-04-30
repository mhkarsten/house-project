import React from 'react'
import { Typography, TextField, Button, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';

const Stats = (props) => {
    const [state, setState] = React.useState({
        stats: [...props.stats]
    })

    function increase() {
    }

    function decrease() {

    }

    function addStatToList(event) {
        console.log(event.target)
        setState({ ...state, [event.target.name]: event.target.checked });
    }

    function newStat(event) {

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
                state.stats.map((stat, index) => {
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