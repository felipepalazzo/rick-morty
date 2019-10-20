import React from 'react'
import { shallow } from 'enzyme'
import Card from '../Cards'

describe('Card', () => {
	const props = {
		groupBy: 2,
		items: [
			{
				id: 1,
				name: 'Chandler',
				gender: 'male',
				episode: [],
				location: { url: '' }
			},
			{
				id: 2,
				name: 'Monica',
				gender: 'female',
				episode: [],
				location: { url: '' }
			},
			{
				id: 3,
				name: 'Ross',
				gender: 'male',
				episode: [],
				location: { url: '' }
			}
		],
		episodes: [],
		locations: []
	}
	const wrapper = shallow(<Card {...props} />)
	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot()
	})
	it('should be grouped', () => {
		expect(wrapper.find('.row')).toHaveLength(props.groupBy)
	})
	it('should render Location', () => {
		expect(wrapper.find('Location')).toHaveLength(props.items.length)
	})
	it('should render EpisodeList', () => {
		expect(wrapper.find('EpisodeList')).toHaveLength(props.items.length)
	})
})
