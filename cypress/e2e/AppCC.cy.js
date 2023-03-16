/* eslint-disable no-undef */
describe("calculator", () => {
  beforeEach(() => {
    cy.visit("/cc");
  });

  it("test expressions", () => {
    cy.fixture("expressions.json").then((expressions) => {
      expressions.forEach((expression) => {
        cy.testExpression(expression);
      });
    });
  });

  it("should clear state", () => {
    cy.keypadPress("5 + 5 = + 4");
    cy.get("button[name='C']").click();
    cy.get("#display").should("contain", "0");
  });

  it("should clear value", () => {
    cy.keypadPress("5 + 6 = + 4");
    cy.get("button[name='CE']").click();
    cy.get("#display").should("contain", "0");
    cy.get("#display").should("contain", "11 +");
  });

  it("should add records history", () => {
    cy.keypadPress("5 - 5 =");
    cy.get("#history > div").should(($div) => {
      expect($div.eq(0), "latest record").to.contain("5 - 5 = 0");
    });
  });

  it("should clear history", () => {
    cy.keypadPress("5 - 5 =");
    cy.get("button[name='clearHistory']").click();
    cy.get("#history > div").should("not.exist");
  });

  it("should hide and show history", () => {
    cy.viewport(800, 600);
    cy.get("#history").should("be.visible");
    cy.get("button[name='showHistory']").click();
    cy.get("#history").should("not.be.visible");
    cy.get("button[name='showHistory']").click();
    cy.get("#history").should("be.visible");
  });

  it("should hide showHistory button on small screens", () => {
    cy.viewport(400, 600);
    cy.get("button[name='showHistory']").should("not.be.visible");
  });
});
