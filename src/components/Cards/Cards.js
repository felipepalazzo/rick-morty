import React from 'react'
import { chunk, find } from 'lodash'
import { getId } from '../../helpers'
import { Location, EpisodeList } from '..'
import PropTypes from 'prop-types'
import './Cards.css'

const gridLayout = 12

export default function Cards({ items, groupBy, episodes, locations }) {
	const chunks = chunk(items, groupBy)
	const getLocation = card =>
		find(locations, ['id', getId(card.location.url)]) || {}
	const getEps = card => {
		const ids = card.episode.map(ep => getId(ep))
		return episodes.filter(ep => ids.includes(ep.id))
	}
	return chunks.map((group, idx) => (
		<div className="row" key={idx}>
			{group.map(card => (
				<div
					className={`col-lg-${gridLayout /
						groupBy} col-md-6 col-sm-6 col-xs-12`}
					key={card.id}
				>
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
							<li className="list-group-item">
								<EpisodeList episodes={getEps(card)} />
							</li>
						</ul>
					</div>
				</div>
			))}
		</div>
	))
}

Cards.propTypes = {
	items: PropTypes.array,
	episodes: PropTypes.array,
	locations: PropTypes.array,
	groupBy: PropTypes.number
}
