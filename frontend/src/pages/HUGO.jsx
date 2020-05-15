import React from 'react'
import { connect } from 'react-redux';

class HUGO extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <main>
                HUGO PREDICTOR
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