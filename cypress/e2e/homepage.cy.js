describe('Homepage user flows', () => {
  let npsApiKey;

  beforeEach(() => {
    npsApiKey = Cypress.env('nps_api_key');
    // ALTERNATE METHOD - Use if test bugs keep coming up
    // cy.intercept("GET", `https://developer.nps.gov/api/v1/parks*`, {
    //   statusCode: 200,
    //   fixture: 'parks'
    // })

    cy.intercept({
      pathname: '/api/v1/parks',
      query: {
        limit: '469',
        api_key: npsApiKey,
      },
    }, {
      statusCode: 200,
      fixture: 'parks'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Display a header with the site logo and name', () => {
    cy.get('.logo-link').should('include.text', 'ParkPassport')
      .get('.logo').should('have.attr', 'src', '/PP-logo.png')
      .get('.logo').should('have.attr', 'alt', 'tan-colored line drawing of wilderness scene and the sun on green backdrop')
    cy.get('.header-percent').should('not.be.visible')
  })

  it('', () => {
    
  })

  it('', () => {
    
  })

  it('', () => {
    
  })

  it('', () => {
    
  })

  it('', () => {
    
  })
})