import kanye from '../img/kanye_west.jpg';
import mark from '../img/mark.jpg';
import malala from '../img/malala.jpg';
import cristina from '../img/cristina_fernandez.jpg';
import bill from '../img/bill_gates.jpg';

const defaultPersons = [
	{
		id: 1,
		name: 'Kanye West',
		time: '1 month ago',
		description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
		category: 'Entertainment',
		image: kanye,
		votes: {
			up: 0,
			down: 0
		}
	},
	{
		id: 2,
		name: 'Mark Zukerberg',
		time: '1 month ago',
		description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
		category: 'Bussiness',
		image: mark,
		votes: {
			up: 0,
			down: 0
		}
	},
	{
		id: 3,
		name: 'Cristina Fernández de Kirchner',
		time: '1 month ago',
		description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
		category: 'Politics',
		image: cristina,
		votes: {
			up: 0,
			down: 0
		}
	},
	{
		id: 4,
		name: 'Malala Yousafzai',
		time: '1 month ago',
		description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
		category: 'Entertainment',
		image: malala,
		votes: {
			up: 0,
			down: 0
		}
	},
	// {
	// 	id: 5,
	// 	name: 'Bill Gates',
	// 	time: '1 month ago',
	// 	description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
	// 	category: 'Bussiness',
	// 	image: bill,
	// 	votes: {
	// 		up: 0,
	// 		down: 0
	// 	}
	// }
];

export default defaultPersons;