/// <reference types="Cypress" />

describe('Display a sidebar', () => {

	it('when user visits the page', () => {
		cy.visit('http://localhost:3000')
		cy.get('button').click('topLeft', { force: true })
	})
})


