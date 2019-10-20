import React, { useState, useEffect } from 'react'
import { Cards } from './components'
import { uniq, compact } from 'lodash'
import { getId } from './helpers'
import api from './api'
import './App.css'

function App() {
	const [characters, setCharacters] = useState([])
	const [locations, setLocations] = useState([])
	const [episodes, setEpisodes] = useState([])
	useEffect(() => {
		const fetchCharacters = async () => {
			await api.get('character').then(data => setCharacters(data))
		}
		fetchCharacters()
	}, [])
	useEffect(() => {
		if (!characters.length) {
			return
		}
		const locationIds = compact(
			uniq(characters.map(char => getId(char.location.url)))
		)
		const episodeIds = uniq(
			characters.map(char => char.episode.map(e => getId(e))).flat()
		)
		const fetchEp = () => {
			api.get('episode', episodeIds).then(data => setEpisodes(data))
		}
		const fetchLocation = () => {
			api.get('location', locationIds).then(data => {
				console.log('returning locations...', data)
				setLocations(data)
			})
		}
		fetchEp()
		fetchLocation()
	}, [characters])
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
				{characters.length <= 0 ? (
					<section className="loader-container">
						<div className="spinner-grow" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</section>
				) : (
					<div className="row">
						<div className="col-md-10 offset-md-1">
							<Cards
								items={characters}
								locations={locations}
								episodes={episodes}
								groupBy={4}
							/>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default App
