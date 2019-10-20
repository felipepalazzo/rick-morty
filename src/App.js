import React, { useState, useEffect } from 'react'
import { Cards } from './components'
import api from './api'
import './App.css'

function App() {
	const [characters, setCharacters] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const fetchCharacters = async () => {
			await api.get('character').then(data => setCharacters(data))
			setLoading(false)
		}
		fetchCharacters()
	}, [])
	return (
		<>
			<nav className="navbar navbar-dark bg-primary">
				<a
					className="navbar-brand"
					href="https://www.imdb.com/title/tt2861424/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Ricky & Morty
				</a>
			</nav>
			<div className="container">
				{loading ? (
					<section className="loader-container">
						<div className="spinner-grow" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</section>
				) : (
					<div className="row">
						<div className="col-md-10 offset-md-1">
							<Cards items={characters} groupBy={3} />
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default App
