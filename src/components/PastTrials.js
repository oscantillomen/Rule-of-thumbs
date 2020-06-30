import React from 'react';
import Trial from './Trial';

import { connect } from 'react-redux';
import { setPersons } from '../redux/actPersons';

const PastTrials = ({ persons }) => (
	<div className="trialsContainer">
		{persons.map((data) => <Trial key={data.id} data={data} setPersons={setPersons} persons={persons} />)}
	</div>
);

const mapStateToProps = (state) => {
	let { persons } = state.redPersons;
	return {
		persons
	};
};

const mapDispatchToProps = {
	setPersons
};

export default connect(mapStateToProps, mapDispatchToProps)(PastTrials);
