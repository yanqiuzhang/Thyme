/// <reference types="Cypress" />

describe('Login form', () => {

	it('User signs in successfully', () => {
		cy.server();
		cy.route({
			method: 'GET',
			url: 'https://demo-stable.kimai.org/api/version',
			response: 'fixtures:successful_login.json',
			headers: {
				"X-AUTH-USER": "anna_admin",
				"X-AUTH-TOKEN": "api_kitten"
			}
		})

		cy.visit('http://localhost:3000')
			.get('input[type=name]').type('anna_admin')
			.get('input[type=password]').type('api_kitten')
			.get('button[type=submit]').click()
			.get('button[id=menuicon]').click('topLeft', { force: true })
			.get('#login_message').should('contain', 'Welcome, ANNA_ADMIN')
		})

	it('User does not get successfully authenticated', () => {
		cy.server();
		cy.route({
			method: "GET",
			url: "https://demo-stable.kimai.org/api/version",
			status: 403,
			response: { message: "Invalid credentials" },
			headers: {
				"X-AUTH-USER": "anna_admin",
				"X-AUTH-TOKEN": "wrong_password"
			}
		})
		cy.visit('http://localhost:3000')
			.get('input[type=name]').type('anna_admin')
			.get('input[type=password]').type('wrong_password')
			.get('button[type=submit]').click()
			.get('#error_message').should('contain', 'Invalid credentials')
	})
})