import React, { Component } from 'react';
import {connect} from 'react-redux'
import { subtractCounter} from '../redux/actions/actions'

class ButtonDown extends Component {
    render() {
        return (
            <button onClick={this.props.meowHandleSubtract} >ลบ</button>
        )
    }
}

const mapDispatchToProps = {
    meowHandleSubtract : subtractCounter
}

export default connect(null, mapDispatchToProps)(ButtonDown)