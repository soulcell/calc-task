describe("calculator", () => {
  beforeEach(() => {
    cy.visit("/");
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

describe("navigation", () => {
  it("should navigate to settings page from home", () => {
    cy.visit("/");
    cy.get("a[href='/settings']").click();
    cy.url().should("include", "/settings");
  });

  it("should navigate to settings page from homeCC", () => {
    cy.visit("/cc");
    cy.get("a[href='/settings']").click();
    cy.url().should("include", "/settings");
  });

  it("should navigate to homeCC from home page", () => {
    cy.visit("/");
    cy.get("a[href='/cc']").click();
    cy.url().should("include", "/cc");
  });

  it("should navigate to home from homeCC page", () => {
    cy.visit("/cc");
    cy.get("a[href='/']").click();
    cy.url().should("include", "/");
  });
});

describe("settings", () => {
  beforeEach(() => {
    cy.visit("/settings");
  });

  it("should change theme", () => {
    cy.get("#themeDropdown").click();
    cy.get("#themeDropdown > ul > button:nth-child(2)").click();
    cy.get("body").should("have.css", "background-color", "rgb(23, 23, 23)");

    cy.get("#themeDropdown").click();
    cy.get("#themeDropdown > ul > button:nth-child(1)").click();
    cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)");
  });
});
