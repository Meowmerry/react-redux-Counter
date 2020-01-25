import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleVisible } from "../redux/actions/actions";

class ButtonVisibility extends Component {
  render() {
    return <button onClick={this.props.handleVisible}>Show/Hide</button>;
  }
}

const mapDispatchToProps = {
  handleVisible: toggleVisible
};

export default connect(null, mapDispatchToProps)(ButtonVisibility);
