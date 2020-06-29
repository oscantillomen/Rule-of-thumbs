const PERSONS = 'PERSONS';

const setPersons = (data) => {
	return {
		type: PERSONS,
		data
	};
};

module.exports = {
	PERSONS,
	setPersons
};
