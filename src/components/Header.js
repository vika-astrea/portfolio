import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <img src={this.props.src} alt="header" style={{ width: "1000px" }} />
    );
  }
}
