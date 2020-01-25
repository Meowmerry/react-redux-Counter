import "./App.css";
import CounterDisplay from "./components/CounterDisplay";
import ButtonUp from "./components/ButtonUp";
import ButtonDown from "./components/ButtonDown";
import React, { Component } from "react";
import ButtonVisibility from "./components/ButtonVisibility";
import { connect } from "react-redux";
import InputBox from "./components/InputBox";


class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.isShow == true ? (
          <>
            <CounterDisplay />
            <ButtonUp />
            <ButtonDown />
          </>
        ) : null}
        <br />
        <ButtonVisibility />
        <br />
        <InputBox />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isShow: state.visible
  };
};

export default connect(mapStateToProps, null)(App);

// state = {
//   counter: 0,
//   visible: true
// };

// handleAddNumber = () => {
//   this.setState({ counter: this.state.counter + 1 });
// };

// handleSubtractNumber = () => {
//   let nextCounter = this.state.counter - 1;
//   if (nextCounter < 0) {
//     this.setState({ counter: 0 });
//   } else {
//     this.setState({ counter: nextCounter });
//   }
// };

// handleVisible = () => {
//   this.setState({
//     visible: !this.state.visible
//   });
// };
