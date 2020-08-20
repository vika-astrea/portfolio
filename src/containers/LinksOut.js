import React, { Component } from "react";
import LinkOut from "../components/LinkOut";
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
        <p> Links out:</p>
        <LinkOut
          href={"https://www.instagram.com/vika_astrea/"}
          logo={icon_ig}
          handle={"@vika_astrea"}
        />
        <LinkOut
          href={"https://www.facebook.com/vicferdez"}
          logo={icon_face}
          handle={"Vic Fernández"}
        />
        <LinkOut
          href={"https://twitter.com/SongOfDominia"}
          logo={icon_twit}
          handle={"@SongOfDominia"}
        />
        <LinkOut
          href={"https://discord.com/login"}
          logo={icon_disc}
          handle={"Vic#2614"}
        />
        <LinkOut
          href={"https://www.deviantart.com/vikaastrea"}
          logo={icon_dev}
          handle={"VikaAstrea"}
        />
        <LinkOut
          href={"https://vika-astrea.tumblr.com/"}
          logo={icon_tumblr}
          handle={"vika-astrea"}
        />
        <LinkOut
          href={
            "https://www.youtube.com/playlist?list=UUGARzynFpYx0S25aPvtzGvA&playnext=1&index=1"
          }
          logo={icon_tube}
          handle={"Vic Fernández"}
        />
      </div>
    );
  }
}
