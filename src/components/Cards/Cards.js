import React from 'react'
import { chunk, find } from 'lodash'
import { getId } from '../../helpers'
import { Location } from '..'
import './Cards.css'

const gridLayout = 12

export default function Cards({ items, groupBy, episodes, locations }) {
	const chunks = chunk(items, groupBy)
	// console.log('locations:', locations)
	const getLocation = card =>
		find(locations, ['id', getId(card.location.url)]) || {}
	console.log('this is cards....', locations)
	return chunks.map((group, idx) => (
		<div className="row card-container" key={idx}>
			{group.map(card => (
				<div className={`col-md-${gridLayout / groupBy}`} key={card.id}>
					<div className="card">
						<img
							src={card.image}
							className="card-img-top"
							alt={card.name}
						/>
						<div className="card-body">
							<h5 className="card-title">{card.name}</h5>
							<ul className="list-info">
								<li className="badge badge-pill badge-primary">
									{card.species}
								</li>
								<li className="badge badge-pill badge-success">
									{card.gender}
								</li>
								<li className="badge badge-pill badge-info">
									{card.status}
								</li>
							</ul>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								{<Location {...getLocation(card)} />}
							</li>
							<li className="list-group-item"></li>
						</ul>
					</div>
				</div>
			))}
		</div>
	))
}
