import React, { Component } from "react";
import back_button from "../images/back_button.png";

export default class BackToTop extends Component {
  render() {
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <img
        src={back_button}
        alt="logo"
        onClick={scrollTop}
        style={{ cursor: "pointer" }}
      />
    );
  }
}
