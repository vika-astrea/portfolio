import React, { Component } from "react";
import ImgGallery from "../components/ImgGallery";

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <p>This is a sample of my work.</p>
        <ImgGallery />{" "}
      </div>
    );
  }
}
