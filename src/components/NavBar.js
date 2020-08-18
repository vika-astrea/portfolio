import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav style={{ display: "flex" }}>
        <Link to="/Home">Home |</Link>
        <Link to="/Gallery">Gallery |</Link>
        <Link to="/Multimedia">Multimedia |</Link>
        <Link to="/Comish">Comissions |</Link>
        <Link to="/LinksOut">Contact me! |</Link>
      </nav>
    </div>
  );
}
