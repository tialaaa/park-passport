describe('Homepage user flows', () => {
  // let npsApiKey;

  beforeEach(() => {
    // npsApiKey = Cypress.env('nps_api_key');
    // console.log(npsApiKey)
    // cy.intercept("GET", `https://developer.nps.gov/api/v1/parks?limit=25&api_key=${npsApiKey}`, {

    // cy.intercept("GET", `https://developer.nps.gov/api/v1/parks?limit=25&api_key=GgsaQEMV2S5mPzKNwSbKIay6hBjcNvFC0Be2Gvi0`, {
    //   statusCode: 200,
    //   fixture: 'parks'
    // })
    // cy.visit('http://localhost:3000/')

    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?limit=25&api_key=GgsaQEMV2S5mPzKNwSbKIay6hBjcNvFC0Be2Gvi0', {
      statusCode: 200,
      fixture: 'parks'
    })
    // }).as('getData')
    // cy.wait('@getData')
    cy.visit('http://localhost:3000/')

  })

  it('Should display a header with the site logo and name', () => {
    cy.get('.logo-link').should('include.text', 'ParkPassport')
      .get('.logo').should('have.attr', 'src', '/PP-logo.png')
      .get('.logo').should('have.attr', 'alt', 'tan-colored line drawing of wilderness scene and the sun on green backdrop')
    cy.get('.header-percent').should('not.be.visible')
  })

  it('Should', () => {
    
  })

  it('Should', () => {
    
  })

  it('Should', () => {
    
  })

  it('Should', () => {
    
  })

  it('Should', () => {
    
  })
})