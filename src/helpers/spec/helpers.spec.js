import * as helpers from '..'

describe('helpers', () => {
	describe('#getId', () => {
		it('should get id from given url', () => {
			expect(
				helpers.getId('https://rickandmortyapi.com/api/character/2')
			).toEqual(2)
		})
	})
})
