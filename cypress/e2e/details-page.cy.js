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
    cy.get('.description').should('include.text', 'Discover a landscape of contrasting colors')
    cy.get('.details-container').children().should('have.length', 2)
    cy.get('.details-info').children().should('have.length', 7)
    cy.get('.details-info').children().first().should('include.text', 'Located in')
      .next().should('include.text', 'Utah')
      .next().should('include.text', 'Primary Address')
      .next().should('include.text', '5 miles north of Moab')
      .next().should('include.text', 'Popular Activities')
      .next().should('include.text', 'Backcountry Camping')
    cy.get('.nps-logo').should('have.attr', 'src', '/NPS-logo.png').and('have.attr', 'alt', 'National Park Service logo')
    cy.get('iframe').should('exist')
  });

  it('Displays a link to navigate to the NPS website', () => {
    cy.visit('http://localhost:3000/park-details/arch')
    cy.get('.link-to-nps').should('include.text', 'More details from the National Park Service').and('have.attr', 'href', 'https://www.nps.gov/arch/index.htm')
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