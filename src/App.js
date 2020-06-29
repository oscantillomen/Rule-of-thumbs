import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './components/fontAwesomeIcons';
import { render } from 'react-dom';
import Footer from './components/Footer';
import PreviousTrials from './components/PreviousTrials';
import Main from './components/Main';
import './style.scss';

const App = () => {
	return (
		<Provider store={store}>
			<React.StrictMode>
				<div>
					<Main />
					<PreviousTrials />
					<Footer />
				</div>
			</React.StrictMode>
		</Provider>
	);
};

render(<App />, document.getElementById('root'));
