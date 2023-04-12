Cypress.Commands.add("keypadPress", (keyString) => {
  const keys = keyString.split(" ");

  keys.forEach((keyName) => {
    cy.get(`button[name="${keyName}"]`).click();
  });
});

Cypress.Commands.add("testExpression", (expression) => {
  cy.keypadPress(expression.body);
  cy.get("[data-cy='display']").should("contain.text", expression.result);
});
