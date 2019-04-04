/// <reference types="Cypress" />

describe('Login form', () => {

	it('when user visits Login page', () => {
		cy.visit('http://localhost:3000')
			.get('input[type=name]').type('susan_super')
			.get('input[type=password]').type('api_kitten')
			.get('button[type=submit]').click()
			.should('contain', 'You have signed in successfully!')
	})
})