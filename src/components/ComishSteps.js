import React, { Component } from "react";

export default class ComishSteps extends Component {
  render() {
    return <img src={this.props.src} alt="steps" style={{ width: "800px" }} />;
  }
}
