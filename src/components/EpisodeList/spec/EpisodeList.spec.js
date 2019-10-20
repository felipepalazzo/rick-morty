import React from 'react'
import { shallow } from 'enzyme'
import EpisodeList from '../EpisodeList'

describe('EpisodeList', () => {
	const props = {
		episodes: [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]
	}
	const wrapper = shallow(<EpisodeList {...props} />)
	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot()
	})
	it('should render the correct num of items', () => {
		expect(wrapper.find('span')).toHaveLength(2)
	})
})
