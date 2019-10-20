import { API_URL } from '../constants'

export default {
	get: endpoint =>
		fetch(`${API_URL}/${endpoint}`)
			.then(data => data.json())
			.then(data => data.results)
}
