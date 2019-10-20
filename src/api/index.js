import { API_URL } from '../constants'

export default {
	get: (endpoint, multiple = []) =>
		fetch(`${API_URL}/${endpoint}/${multiple}`)
			.then(data => data.json())
			.catch(error => Promise.reject(error))
			.then(data => (multiple.length ? data : data.results))
			.catch(error =>
				console.warn(`Error with --${endpoint}-- endpoint:`, error)
			)
}
