import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../redux/actions/actions'

class ButtonUp extends Component {
    render() {
        return (
            <button onClick={this.props.NushandleAdd} >บวก</button>
        )
    }
}

const mapDispatchToProps = {
    NushandleAdd: addCounter
}


export default connect(null, mapDispatchToProps)(ButtonUp)