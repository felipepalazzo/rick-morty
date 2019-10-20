import React from 'react'

export default function List({ items }) {
	return (
		<ul>
			{items.map(item => (
				<li>{item.name}</li>
			))}
		</ul>
	)
}
