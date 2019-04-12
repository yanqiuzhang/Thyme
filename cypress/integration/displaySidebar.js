/// <reference types="Cypress" />

describe("Display a sidebar", () => {
	it("when user visits the page", () => {
		cy.visit("http://localhost:3000")
			.get('input[type=name]').type('anna_admin')
			.get('input[type=password]').type('api_kitten')
			.get('button[type=submit]').click()
			.get("Button[id=menuicon]").click("topLeft", { force: true });
	});

	it("has a logo", function () {
		cy.get(".form").find("img");
	});

	it("has a tab1", function () {
		cy.get(".item").should("contain", "Dashboard");
	});
});
