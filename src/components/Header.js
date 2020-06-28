import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
    <header>
        <div>
            <h1>Rule of Thumb.</h1>
            <nav>
                <ul>
                    <li><a href="">Past Trials</a></li>
                    <li><a href="">How It Works</a></li>
                    <li><a href="">Log In / Sign Up</a></li>
                    <li><a href="" ><FontAwesomeIcon icon="search" size="2x" /></a></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;