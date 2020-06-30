import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

const Header = () => (
  <header>
    <div role="navigation" aria-label="Main navigation">
      <Link to="/">
        <h1 aria-label="Logo">Rule of Thumb.</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="past_trials">Past Trials</Link>
          </li>
          <li>
            <Link to="how_it_works">How It Works</Link>
          </li>
          <li>
            <Link to="login">Log In / Sign Up</Link>
          </li>
          <li>
            <Link to="search">
              <FontAwesomeIcon icon="search" size="2x" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
