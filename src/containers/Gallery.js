import React, { Component } from "react";
import Header from "../components/Header";
import ImgGallery from "../components/ImgGallery";
import gallery_header from "../images/gallery_header.png";
import text from "../images/gallery_text.png";

export default class Gallery extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#3a4052",
        }}
      >
        <Header src={gallery_header} />
        <img src={text} alt="text" style={{ width: "600px" }} />
        <ImgGallery />{" "}
      </div>
    );
  }
}
