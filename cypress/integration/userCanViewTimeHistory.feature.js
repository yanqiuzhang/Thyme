/// <reference types="Cypress" />

describe("User can view history of time recordings", () => {
	it("successfully displays a list of work history over the last 7 days ", () => {
		cy.server();
		cy.route({
			method: "GET",
			url: "https://demo-stable.kimai.org/api/timesheets",
			response: "fixtures:get_data.json",
			headers: {
				"X-AUTH-USER": "susan_super",
				"X-AUTH-TOKEN": "api_kitten"
			}
		});
		cy.visit("http://localhost:3000");
		cy.get("input[type=name]").type("anna_admin");
		cy.get("input[type=password]").type("api_kitten");
		cy.get("button[type=submit]").click();
		cy.contains("begin");
		cy.contains("end");
		cy.contains("duration");
		cy.contains("project");
		cy.contains("activity");
	});
});

describe("User cannot view history of time recordings", () => {
	it("does not display any work history", () => {
		cy.server();
		cy.route({
			method: "GET",
			url: "https://demo-stable.kimai.org/api/timesheets",
			status: 500,
			response: { message: "Internal Server Error" },
			response: "fixtures:get_data.json",
			headers: {
				"X-AUTH-USER": "susan_super",
				"X-AUTH-TOKEN": "api_kitten"
			}
		});
		cy.visit("http://localhost:3000");
		cy.get("input[type=name]").type("anna_admin");
		cy.get("input[type=password]").type("api_kitten");
		cy.get("button[type=submit]").click();
		cy.get('#error_message').should('contain', 'Currently your time record history is not available')
		cy.get("begin").should("not.exist");
		cy.get("end").should("not.exist");
		cy.get("duration").should("not.exist");
		cy.get("project").should("not.exist");
		cy.get("activity").should("not.exist");
	});
});
