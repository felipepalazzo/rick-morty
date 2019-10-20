import React from 'react'
import PropTypes from 'prop-types'

export default function EpisodeList({ episodes }) {
	return (
		<section>
			<div>
				<strong>Episodes: </strong>
			</div>
			{episodes.map((ep, idx) => (
				<span key={ep.id}>
					{ep.name}
					{idx !== episodes.length - 1 ? ' / ' : ''}
				</span>
			))}
		</section>
	)
}

EpisodeList.defaultProps = {
	episodes: []
}

EpisodeList.propTypes = {
	episodes: PropTypes.array
}
