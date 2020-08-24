import React, { Component } from "react";
import Header from "../components/Header";
import LinkOut from "../components/LinkOut";
import header from "../images/contact_header.png";
import icon_dev from "../images/icon_dev.png";
import icon_disc from "../images/icon_disc.png";
import icon_face from "../images/icon_face.png";
import icon_ig from "../images/icon_ig.png";
import icon_tube from "../images/icon_tube.png";
import icon_tumblr from "../images/icon_tumblr.png";
import icon_twit from "../images/icon_twit.png";

export default class LinksOut extends Component {
  render() {
    return (
      <div>
        <Header src={header} />

        <p>
          Feel free to send me messages and follow me on any of these platforms:
        </p>
        <div style={{ display: "flex" }}>
          <LinkOut
            href={"https://www.instagram.com/vika_astrea/"}
            logo={icon_ig}
          />
          <LinkOut
            href={"https://www.facebook.com/vicferdez"}
            logo={icon_face}
          />
          <LinkOut
            href={"https://twitter.com/SongOfDominia"}
            logo={icon_twit}
          />{" "}
        </div>
        <br />
        <br />
        <div style={{ display: "flex" }}>
          <LinkOut
            href={"https://discord.com/login"}
            logo={icon_disc}
            width={"272px"}
            height={"109px"}
          />
          <LinkOut
            href={"https://www.deviantart.com/vikaastrea"}
            logo={icon_dev}
          />
          <LinkOut
            href={"https://vika-astrea.tumblr.com/"}
            logo={icon_tumblr}
          />
          <LinkOut
            href={
              "https://www.youtube.com/playlist?list=UUGARzynFpYx0S25aPvtzGvA&playnext=1&index=1"
            }
            logo={icon_tube}
            handle={"Vic Fernández"}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
