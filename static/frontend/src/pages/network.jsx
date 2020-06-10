import React from 'react'
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import '../style/network.scss'

class Network extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <main className='networkBody'>
                <Typography variant='h1'>Account</Typography>
                <div>
                    <div>
                        <Typography variant='h3'>Network Info</Typography>
                        <div className='netInfoBox'>
                            info goes here
                        </div>
                    </div>
                    <div>
                        <Typography variant='h3'>DNS stats</Typography>
                        <div className='DNSBox'>
                            info goes here
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


export default connect(mapStateToProps, mapDispatchToProps)(Network)