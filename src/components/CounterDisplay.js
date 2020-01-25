import React, { Component } from 'react'
import { connect } from 'react-redux'

class CounterDisplay extends Component {

    render() {
        return (
            <div>
                {this.props.honCounter}
            </div>
        )
    }
}

const mapstateToProps = state => ({
    honCounter: state.counter
})

export default connect(mapstateToProps, null)(CounterDisplay)