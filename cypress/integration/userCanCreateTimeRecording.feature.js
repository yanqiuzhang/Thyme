/// <reference types="Cypress" />

describe("User can create time recording", () => {
	it("successfully", () => {
		cy.server();
		cy.route({
			method: 'POST',
			url: 'https://demo-stable.kimai.org/api/timesheets',
			response: 'fixtures:save_data.json',
			headers: {
				"X-AUTH-USER": "susan_super",
				"X-AUTH-TOKEN": "api_kitten"
			}
		})
		cy.visit("http://localhost:3000");
		cy.get('input[name="begin"]').type("07:00");
		cy.get('input[name="end"]').type("08:00");
		cy.get('button[name="create"]').click();
		cy.contains('Your time was saved')
	});
});
