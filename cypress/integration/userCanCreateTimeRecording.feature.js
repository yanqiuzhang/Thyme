describe("User can create time recording", () => {
  it("when user visits the page", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[name="begin"]');
    cy.get('label[name="Start Time"]').should("contain", "Start Time");
    cy.get('input[name="end"]');
    cy.get('label[name="End Time"]').should("contain", "End Time");
    cy.get("button")
      .click()
      .should("contain", "post");
  });
});
