/// <reference types="Cypress" />

describe("User can view history of time recordings", () => {
	it("successfully displays a list", () => {
		cy.server();
		cy.route({
			method: 'GET',
			url: 'https://demo-stable.kimai.org/api/timesheets',
			response: 'fixtures:save_data.json',
			headers: {
				"X-AUTH-USER": "susan_super",
				"X-AUTH-TOKEN": "api_kitten"
			}
		})
		cy.visit("http://localhost:3000")
		cy.get('input[type=name]').type('anna_admin')
		cy.get('input[type=password]').type('api_kitten')
		cy.get('button[type=submit]').click()
		cy.get('input[name="begin"]').type("07:00")
		cy.get('input[name="end"]').type("08:00")
		cy.get('button[name="create"]').click()
		cy.contains('Your time was saved')
		cy.contains('07:00')
		cy.contains('08:00')
	})
});