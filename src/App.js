import React, { useState, useEffect } from 'react'
import { List } from './components'
import api from './api'
import './App.css'

function App() {
	const [characters, setCharacters] = useState([])
	useEffect(() => {
		const fetchCharacters = async () => {
			await api.get('character').then(data => setCharacters(data))
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
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<List items={characters} />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
