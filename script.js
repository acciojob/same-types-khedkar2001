// Updated isSameType function
function isSameType(value1, value2) {
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true; // Both are NaN
  }
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false; // One of them is NaN, return false
  }
  return typeof value1 === typeof value2; // Compare types otherwise
}

// Cypress test code
describe('isSameType Tests', () => {
  it('should return true for two strings', () => {
    const value1 = "hello";
    const value2 = "world";
    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        // Stub the prompt function
        cy.stub(win, "prompt").onFirstCall().returns(value1).onSecondCall().returns(value2);
      }
    });
    cy.on("window:alert", str => {
      expect(str.toString()).to.equals("true"); // Expecting true as both are same type (string)
    });
  });

  it('should return false for a string and a number', () => {
    const value1 = "hello";
    const value2 = 123;
    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        // Stub the prompt function
        cy.stub(win, "prompt").onFirstCall().returns(value1).onSecondCall().returns(value2);
      }
    });
    cy.on("window:alert", str => {
      expect(str.toString()).to.equals("false"); // Expecting false as types are different (string vs number)
    });
  });

  it('should return true for two NaN values', () => {
    const value1 = NaN;
    const value2 = NaN;
    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        // Stub the prompt function
        cy.stub(win, "prompt").onFirstCall().returns(value1).onSecondCall().returns(value2);
      }
    });
    cy.on("window:alert", str => {
      expect(str.toString()).to.equals("true"); // Expecting true as both are NaN
    });
  });

  it('should return false for NaN and a number', () => {
    const value1 = NaN;
    const value2 = 123;
    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        // Stub the prompt function
        cy.stub(win, "prompt").onFirstCall().returns(value1).onSecondCall().returns(value2);
      }
    });
    cy.on("window:alert", str => {
      expect(str.toString()).to.equals("false"); // Expecting false as one is NaN and the other is a number
    });
  });
});
