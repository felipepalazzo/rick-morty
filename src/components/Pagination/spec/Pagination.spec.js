import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../Pagination'

describe('Pagination', () => {
	const props = { current: 5, total: 10, onClick: jest.fn() }
	const wrapper = shallow(<Pagination {...props} />)
	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot()
	})
	it('should render the correct num of pages', () => {
		expect(wrapper.find('li')).toHaveLength(props.total)
	})
	it('should accept a onClick function', () => {
		wrapper
			.find('li')
			.first()
			.prop('onClick')()
		expect(props.onClick).toHaveBeenCalledTimes(1)
	})
})
