import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
	<footer>
		<div>
			<nav className="navTerms">
				<ul>
					<li>
						<a href="#terms">Terms and Conditions</a>
					</li>
					<li>
						<a href="#privacy">Privacy Policy</a>
					</li>
					<li>
						<a href="#contact">Contact Us</a>
					</li>
				</ul>
			</nav>
			<nav className="navSocial">
				<ul>
					<li>Follow Us</li>
					<li>
						<a href="https://www.facebook.com/" target="_blank" className="icon">
							<FontAwesomeIcon icon={[ 'fab', 'facebook-square' ]} size="2x" />
						</a>
					</li>
					<li>
						<a href="https://twitter.com/" target="_blank" className="icon">
							<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} size="2x" />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
);

export default Footer;
