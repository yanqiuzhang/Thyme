/// <reference types="Cypress" />

describe('User can see a footer bar', () => {

	it('User signs in successfully', () => {
		cy.visit('http://localhost:3000')
			.get('input[type=name]').type('anna_admin')
			.get('input[type=password]').type('api_kitten')
			.get('button[type=submit]').click()
			cy.contains("@Copyright 2019 Thyme Out Inc All Rights Reserved");
		})
})