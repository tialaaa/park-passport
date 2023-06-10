describe('Homepage user flows', () => {
  beforeEach(() => {
    let npsApiKey = Cypress.env('nps_api_key');
    
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

  it('Displays the site header and a loading message', () => {
    cy.get('.logo-link').should('include.text', 'ParkPassport')
      .get('.logo').should('have.attr', 'src', '/PP-logo.png')
      .get('.logo').should('have.attr', 'alt', 'tan-colored line drawing of wilderness scene and the sun on green backdrop')
    cy.get('.header-percent').should('not.be.visible')
    cy.get('.message-loading').should('have.text', 'Park information loading...')
  });

  it('Once fully loaded, displays a subheader message and grid of different parks', () => {
    cy.get('.message-helper').should('include.text', 'Find out by collecting badges')
    cy.get('.message-percent').should('have.text', 'You have visited 0% of the National Parks!')
    cy.get('.parks-container').children().should('have.length', 2)
    cy.get('.card').first().children().should('include.text', 'Acadia National Park').and('have.attr', 'href')
      .get('.card-image').first()
        .should('have.attr', 'src', 'https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg')
        .should('have.attr', 'alt', 'Large puffy clouds dot a brilliant blue sky as wave crash against the rocky coastline of Acadia.')
    cy.get('.card').last().children().should('include.text', 'Arches National Park').and('have.attr', 'href')
      .get('.card-image').last()
        .should('have.attr', 'src', 'https://www.nps.gov/common/uploads/structured_data/473F5463-F0D2-261D-CEF5FCB39363590B.jpg')
        .should('have.attr', 'alt')
  });

  it('Each park card has a greyed-out badge that, when clicked, updates the \'% Visited\' stat and changes the card\'s color', () => {
    cy.get('.visited-badge').first().should('have.css', 'filter', 'grayscale(1)')
      .should('have.css', 'opacity', '0.75')
      .get('.card-image').first().should('not.have.css', 'filter', 'grayscale(1)')
      .get('.message-percent').should('have.text', 'You have visited 0% of the National Parks!')
    cy.get('.header-percent').should('not.be.visible')
    cy.get('.visited-badge').first().click()
    cy.get('.visited-badge').first().should('have.css', 'filter', 'none')
      .should('have.css', 'opacity', '1')
      .get('.message-percent').should('have.text', 'You have visited 50% of the National Parks!')
      .get('.card-image').first().should('have.css', 'filter', 'grayscale(1)')
      .get('.header-percent').should('be.visible').should('have.text', '50% visited')
    cy.get('.visited-badge').first().click()
    cy.get('.visited-badge').first().should('have.css', 'filter', 'grayscale(1)')
      .get('.message-percent').should('have.text', 'You have visited 0% of the National Parks!')
  });
});