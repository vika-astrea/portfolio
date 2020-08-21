import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import ComishSteps from "../components/ComishSteps";
import Header from "../components/Header";
import adition from "../images/comish_adition.png";
import another from "../images/comish_another.png";
import contact from "../images/comish_contact.png";
import pricing from "../images/comish_pricing.png";
import process from "../images/comish_process.png";
import steps from "../images/comish_steps.png";
import intro from "../images/comissions_intro.png";
import header from "../images/commish_header.png";

export default class Comish extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: " rgb(2,0,36)",
          background:
            "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(58,64,82,1) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
        <Header src={header} />
        <img src={intro} alt="intro" style={{ width: "800px" }} />
        <ComishSteps src={contact} />
        <p>
          Reach out to me in any of{" "}
          <Link to="/LinksOut" target="_blank">
            these platforms
          </Link>{" "}
          or via mail to{" "}
          <a
            href="mailto:vicdraws@gmail.com?subject=Art!"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            vicdraws@gmail.com
          </a>{" "}
          and tell me you want to commission me and what kind of piece do you
          want made (is it an icon? a fullbody with background?).
          <br /> Be patient and polite, I will answer every request!
        </p>
        <ComishSteps src={pricing} />
        <p>
          Once you tell me what you want we will accord on a price based on the
          price chart (see below). You will pay 50% of the price up front and I
          will start to work on your piece. I won't accept payment unless I'm
          absolutely certain I have the time and will to do the job. Also, I
          won't start working unless the first payment is done. Payments are
          done via
          <a
            href="https://ko-fi.com/vicdraws"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Ko-fi{" "}
          </a>{" "}
        </p>
        []
        <ComishSteps src={process} />
        <p>
          As soon as it is finished, you will receive watermarked detailed
          lineart so you can see how the piece is comming along. This is the
          stage to sugest changes in pose, details, etc. Once the revisions are
          made I will start the coloring process.{" "}
        </p>
        []
        <ComishSteps src={steps} />
        <p>
          Once the art is done, you'll be notified and then you'll pay the other
          50% of the price, completing the payment in full. You'll get your
          final piece in the formats of your preference.
        </p>
        <ComishSteps src={adition} />
        <p>
          If there are mistakes in the coloring (wrong colors, skin tones too
          light or too dark, ambient light not working properly) I'll change it
          promptly and without cost. Any other revisions after this point will
          come with an aditional cost though, so I encourage you to make use of
          the revision stages.
        </p>
        <ComishSteps src={another} />
        <p>
          If you don't want me to showcase your art in social media, please let
          me know. We artist need these platforms to grow and work. Also, it
          would be amazing of you to share my work with propper credit and even
          links. I would be thankful from the bottom of my heart.{" "}
        </p>
        <p>
          If you are now inclined to hire my work, I kindly remind you to be
          present in the platform we are interacting so I can get in touch with
          you quickly. I hope we can work together in the best of terms!{" "}
        </p>
        <BackToTop />
      </div>
    );
  }
}
