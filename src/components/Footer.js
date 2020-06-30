import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

const Footer = () => (
  <footer aria-label="Footer">
    <div>
      <nav
        className="navTerms"
        aria-label="Terms and conditions, privacy policy and contact"
      >
        <ul>
          <li>
            <Link to="terms">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <nav className="navSocial" aria-label="Social links">
        <ul>
          <li>Follow Us</li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="icon"
              aria-label="Visit our Facebook"
            >
              <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="icon"
              aria-label="Visit our Twitter"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
