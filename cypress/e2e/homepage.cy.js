describe('Homepage user flows', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://developer.nps.gov/api/v1/parks?limit=15&api_key=${process.env.REACT_APP_API_KEY}`, {
      statusCode: 200,
      fixture: 'parks.json'
    })
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