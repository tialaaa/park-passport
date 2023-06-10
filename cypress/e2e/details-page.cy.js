describe('template spec', () => {
  let mapsApiKey = Cypress.env('google_api_key');

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
    }).as('getData')
    cy.visit('http://localhost:3000/')
    cy.wait('@getData')
  });

  it('Can click a park name to navigate to a details page about that park', () => {
    cy.get('.link-to-details').last().click()
    cy.url().should('eq', 'http://localhost:3000/park-details/arch')
    cy.get('.banner-image').should('have.attr', 'src', 'https://www.nps.gov/common/uploads/structured_data/473F5463-F0D2-261D-CEF5FCB39363590B.jpg')
      .should('have.attr', 'alt', 'A crowd of people sit and watch the sunset at delicate arch.')
    cy.get('.banner-name').should('have.text', 'Arches National Park')
    cy.get('.details-info').children().should('have.length', 7)
    cy.get('.details-info').children().first().should('include.text', 'States: UT')
      .next().should('include.text', 'Primary Address')
      .next().should('include.text', 'Discover a landscape of contrasting colors')
      .next().should('include.text', 'Additional Details from NPS').and('have.attr', 'href')
    cy.get('iframe').should('have.css', 'width', '600px')
  });

  it('Displays a link to be taken to the NPS website', () => {
    cy.visit('http://localhost:3000/park-details/arch')
  });

  it('Displays an embedded map with a link to Google Maps', () => {
    cy.visit('http://localhost:3000/park-details/arch')
    cy.get('iframe').should('have.attr', 'src', `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=Arches National Park&maptype=satellite`)
  });

  it('Can navigate back to the homepage by clicking the header logo', () => {
    cy.visit('http://localhost:3000/park-details/arch')
    cy.get('.logo-link').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });
});