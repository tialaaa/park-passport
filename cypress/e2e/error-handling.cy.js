describe('template spec', () => {
  it('Displays a message for server-side errors when network request is not successful', () => {
    cy.intercept("GET", `https://developer.nps.gov/api/v1/parks*`, {
      statusCode: 500,
      body: {
        message: 'Internal Server Error'
      }
    })
    cy.visit('http://localhost:3000/')

    cy.get('.logo-link').should('include.text', 'ParkPassport')
      .get('.logo').should('have.attr', 'src', '/PP-logo.png')
      .get('.error-message').should('have.text', 'We seem to be having technical issues. Please try again later.')
  });

  it('Displays a different message for client-side errors when the URL doesn\'t exist, and can navigate back to homepage using the Header logo', () => {
    cy.intercept("GET", `https://developer.nps.gov/api/v1/parks*`, {
      statusCode: 200,
      fixture: 'parks'
    })
    cy.visit('http://localhost:3000/acadia')

    cy.get('.logo-link').should('include.text', 'ParkPassport')
      .get('.logo').should('have.attr', 'src', '/PP-logo.png')
      .get('.error-message').should('have.text', 'Page not found. Please click the logo above to return home.')
    cy.get('.logo-link').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });
});