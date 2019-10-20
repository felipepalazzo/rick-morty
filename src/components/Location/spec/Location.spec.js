import React from 'react'
import { shallow } from 'enzyme'
import Location from '../Location'

describe('Location', () => {
	const props = { name: 'Earth', dimension: 'other' }
	it('renders without crashing', () => {
		const wrapper = shallow(<Location {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
