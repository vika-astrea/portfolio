import React from "react";
import { Link } from "react-router-dom";
import nav_2 from "../images/nav_2.png";
import nav_3 from "../images/nav_3.png";
import nav_4 from "../images/nav_4.png";
import nav_5 from "../images/nav_5.png";
import nav_6 from "../images/nav_6.png";

export default function NavBar() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          backgroundColor: "#3a4052",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Link to="/Home">
          {" "}
          <img src={nav_2} alt="img" />
        </Link>
        <Link to="/Gallery">
          {" "}
          <img src={nav_3} alt="img" />
        </Link>
        <Link to="/Multimedia">
          {" "}
          <img src={nav_4} alt="img" />
        </Link>
        <Link to="/Comish">
          {" "}
          <img src={nav_5} alt="img" style={{marginRight:"10px"}} />
        </Link>
        <Link to="/LinksOut">
          {" "}
          <img src={nav_6} alt="img" style={{marginRight:"10px", marginLeft:"20px"}} />
        </Link>
      </nav>
    </div>
  );
}
