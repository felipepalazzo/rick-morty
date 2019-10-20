import { API_URL } from '../constants'

export default {
	get: (endpoint, multiple = []) =>
		fetch(`${API_URL}/${endpoint}/${multiple}`)
			.then(data => data.json())
			.then(data => (multiple.length ? data : data.results))
}
