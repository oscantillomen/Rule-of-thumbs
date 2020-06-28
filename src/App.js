import React from 'react';
import './components/fontAwesomeIcons';
import { render } from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './style.scss';

const App = () => {
	return (
		<React.StrictMode>
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		</React.StrictMode>
	);
};

render(<App />, document.getElementById('root'));
