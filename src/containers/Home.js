import React, { Component } from "react";
import home_1 from "../images/home_1.png";
import home_2 from "../images/home_2.png";
import home_3 from "../images/home_3.png";
import home_4 from "../images/home_4.png";
import home_yaz from "../images/home_yaz.png";
import home_workplace from "../images/home_workplace.png";
import home_tamaki from "../images/home_tamaki.png";
import BackToTop from "../components/BackToTop";
import Header from "../components/Header";


export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: " rgb(2,0,36)",
          background:
            "linear-gradient(176deg, rgba(2,0,36,1) 0%, rgba(58,64,82,1) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
<Header src={home_1} />
        <img
          src={home_2}
          alt="artist"
          style={{ width: "800px" }}
        />
        <img
          src={home_yaz}
          alt="portrait"
          style={{ margin: "40px", width: "600px" }}
        />
        <img
          src={home_3}
          alt="tools"
          style={{ margin: "40px", width: "800px" }}
        />
        <img
          src={home_workplace}
          alt="workplace"
          style={{ margin: "40px", width: "600px" }}
        />
        <img
          src={home_4}
          alt="about me"
          style={{ margin: "40px", width: "800px" }}
        />
        <img
          src={home_tamaki}
          alt="cat"
          style={{ margin: "40px", width: "600px" }}
        />
        <br />

        <BackToTop />
      </div>
    );
  }
}
