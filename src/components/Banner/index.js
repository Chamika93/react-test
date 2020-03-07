import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

export default function Banner({ children }) {
  return (
    <div className="defaultHero">
      <div className="banner">
        <h1>Best Tours in Melbourne</h1>
        <div></div>
        <p>Get an AMzing Experience</p>
        <Link to={ROUTES.HOME} className="btn-primary">
          Our Tours
        </Link>
      </div>
    </div>
  );
}
