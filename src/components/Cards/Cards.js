import React from 'react'
import { chunk } from 'lodash'
import { getId } from '../../helpers'
import './Cards.css'

const gridLayout = 12

export default function Cards({ items, groupBy }) {
	const chunks = chunk(items, groupBy)
	console.log('this is cards....')
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
								<li className="badge badge-pill badge-primary">
									{card.gender}
								</li>
								<li className="badge badge-pill badge-primary">
									{card.status}
								</li>
								<li className="badge badge-pill badge-primary">
									{card.location.url}
								</li>
							</ul>
						</div>
					</div>
				</div>
			))}
		</div>
	))
}
