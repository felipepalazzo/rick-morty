import { API_URL } from '../constants'

export default {
	get: (endpoint, multiple = [], page) => {
		let url = `${API_URL}/${endpoint}/${multiple}`
		if (page) {
			url += `?page=${page}`
		}
		return fetch(url)
			.then(data => data.json())
			.catch(error => Promise.reject(error))
			.then(data => {
				if (multiple.length) {
					return data
				}
				return {
					results: data.results,
					pages: data.info.pages
				}
			})
			.catch(error =>
				console.warn(`Error with --${endpoint}-- endpoint:`, error)
			)
	}
}
