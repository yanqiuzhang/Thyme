/// <reference types="Cypress" />

describe('Display a sidebar', () => {

	it('when user visits the page', () => {
		cy.visit('http://localhost:3000')
		cy.get('button')
	    .click('topLeft', { force: true })
	})

	it('has a logo', function () {
		cy.get('.form')
		  .find('img')
	})

	it('has a tab1', function () {
		cy.get('.item')
		  .should('contain', 'Tab1')
  })
})


