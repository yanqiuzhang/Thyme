/// <reference types="Cypress" />

describe('Display a sidebar', () => {

	it('when user visits the page', () => {
		cy.visit('http://localhost:3000')
		cy.get('input[id="username"]');
    cy.get('label[name="Username"]').should("contain", "Username");
    cy.get('input[id="password"]');
    cy.get('label[name="Password"]').should("contain", "Password");
	})
})