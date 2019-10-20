import React, { useEffect } from 'react'
import api from './api'
import './App.css'

function App() {
	useEffect(() => {
		api.get('character').then(data => console.log('this is data:', data))
	}, [])
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>
		</div>
	)
}

export default App
