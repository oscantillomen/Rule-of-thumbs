import React from 'react';
import './components/fontAwesomeIcons';
import { render } from 'react-dom';
import Footer from './components/Footer';
import PreviousTrials from './components/PreviousTrials';
import Main from './components/Main';
import './style.scss';

const App = () => {
	return (
		<React.StrictMode>
			<div>
				<Main />
        <PreviousTrials />
        <Footer />
			</div>
		</React.StrictMode>
	);
};

render(<App />, document.getElementById('root'));
