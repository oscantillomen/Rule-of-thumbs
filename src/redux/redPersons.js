import { PERSONS } from './actPersons';

import kanye from '../img/kanye_west.jpg';
import mark from '../img/mark.jpg';
import malala from '../img/malala.jpg';
import cristina from '../img/cristina_fernandez.jpg';
import bill from '../img/bill_gates.jpg';

const initialState = {
	persons: [
		{
			name: 'Kanye West',
			time: '1 month ago',
			description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
			category: 'Entertainment',
			image: kanye
		},
		{
			name: 'Mark Zukerberg',
			time: '1 month ago',
			description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
			category: 'Bussiness',
			image: mark
		},
		{
			name: 'Cristina Fernández de Kirchner',
			time: '1 month ago',
			description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
			category: 'Politics',
			image: cristina
		},
		{
			name: 'Malala Yousafzai',
			time: '1 month ago',
			description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
			category: 'Entertainment',
			image: malala
		},
		// {
		// 	name: 'Bill Gates',
		// 	time: '1 month ago',
		// 	description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
		// 	category: 'Bussiness',
		// 	image: bill
		// }
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case PERSONS:
			return Object.assign({}, state, {
				persons: action.persons
			});

		default:
			return state;
	}
};

export default reducer;
