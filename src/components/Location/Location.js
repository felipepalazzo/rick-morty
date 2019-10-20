import React from 'react'
import PropTypes from 'prop-types'
import './Location.css'

export default function Location(props) {
	return (
		<section className="text-container">
			<div>
				<strong>Planet:</strong> {props.name}
			</div>
			<div>
				<strong>Dimension:</strong> {props.dimension}
			</div>
			<div>
				<strong>Residents:</strong> {props.residents.length}
			</div>
		</section>
	)
}

Location.defaultProps = {
	residents: []
}
