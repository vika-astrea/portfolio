import React, { Component } from "react";

export default class LinkOut extends Component {
  render() {
    return (
      <div>
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
          <img
            src={this.props.logo}
            alt="logo"
            style={{ height: "100%", width: "70%" }}
          />{" "}
        </a>
      </div>
    );
  }
}
