import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.css'

export default function Pagination({ current, total, onClick }) {
	let pages = []
	for (let i = 1; i <= total; i++) {
		pages.push(i)
	}
	const handleClik = page => {
		onClick(page)
	}
	return (
		<ul className="pagination pagination-sm">
			{pages.map((page, idx) => (
				<li
					className={`page-item ${
						current === idx + 1 ? 'active' : ''
					}`}
					key={page}
					onClick={handleClik.bind(this, page)}
				>
					<a className="page-link" href="#">
						{page}
					</a>
				</li>
			))}
		</ul>
	)
}

Pagination.propTypes = {
	current: PropTypes.number,
	total: PropTypes.number,
	onClick: PropTypes.func
}
