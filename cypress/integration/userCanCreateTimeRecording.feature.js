describe("User can create time recording", () => {
	it("when user visits the page", () => {
		cy.visit("http://localhost:3000");
		cy.get('input[name="begin"]');
		cy.get('label[name="Start Time"]').should("contain", "Start Time");
		cy.get('input[name="end"]');
		cy.get('label[name="End Time"]').should("contain", "End Time");
		cy.get('input[name="begin"]').type("07:00");
		cy.get('input[name="end"]').type("08:00");
		cy.get('button[name="create"]').click();
		cy.contains('Your time was saved')
	});
});
