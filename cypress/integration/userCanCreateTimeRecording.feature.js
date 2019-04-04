describe("User can create time recording", () => {
	it("when user visits the page", () => {
		cy.visit("http://localhost:3000");
		cy.get('input[name="begin"]');
		cy.get('label[name="Start Time"]').should("contain", "Start Time");
		cy.get('input[name="end"]');
		cy.get('label[name="End Time"]').should("contain", "End Time");
		cy.get('input[name="begin"]').type("2019-04-12 07:00");
		cy.get('input[name="end"]').type("2019-04-12 08:00");
		cy.get('button[name="create"]')
		.click();
	});
});
