import React from 'react';
import InfoGroup from './InfoGroup';
import ClosingIn from './ClosingIn';
import Header from './Header';

const Main = () => (
    <main>
        <div>
            <Header />
        </div>
        <div>
            <InfoGroup />
        </div>
        <div className="closingIn">
            <ClosingIn />
        </div>
    </main>
)

export default Main;