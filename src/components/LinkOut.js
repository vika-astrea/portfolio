import React, { Component } from 'react'

export default class LinkOut extends Component {
  render() {
    return (
      <div>
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        <img src={this.props.logo} className="App-logo" alt="logo"style={{ width: "36px",
    height: "36px"}} /> {this.props.handle}</a>
        
      </div>
    )
  }
}
