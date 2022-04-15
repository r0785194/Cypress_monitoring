context('My first spec', () => {

  beforeEach(() => {
        cy.visit('/')
  })

  it('I am on coolblue website', () => {
        cy.url().should('eq', Cypress.config("baseUrl"))
  })

  afterEach(() => {
        // at the end of each scenario take screenshot
        cy.screenshot()
  })

})
