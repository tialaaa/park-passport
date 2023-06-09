describe('template spec', () => {
  let npsApiKey = Cypress.env('nps_api_key');

  beforeEach(() => {
    // npsApiKey = Cypress.env('nps_api_key');

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
  });

  it('', () => {
    
  });

  it('', () => {
    
  });

  it('', () => {
    
  });

  it('', () => {
    
  });

  it('', () => {
    
  });
});