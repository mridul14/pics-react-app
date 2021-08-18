import axios from 'axios';

// create method will create an instance of the axios client, with some defaulted properties
export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 6j_qm6zkxzwfXHbNYqmf-8_6nMJVGQgcAxOEPN7_yeA'
		}
});