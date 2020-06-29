import React from 'react';
import Trial from './Trial';

import { connect } from 'react-redux';
import { setPersons } from '../redux/actPersons';

const PastTrials = ({ persons }) => <div className="trialsContainer">
    {persons.map((data) => <Trial key={`key-${data.name.replace(/ /g, '').toLocaleLowerCase()}`} data={data} />)}
</div>;


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
