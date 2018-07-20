/// <reference types="Cypress" />

context('Listings', () => {


  it('adds a new listing and displays it on the listings page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.user-input')
      .find('#title').type('Boat')
      .next().type(300)
      .next().type('https://www.tallshipscharleston.com/images/ships/PrideOfBaltimore/pride_orig-1.jpg')
      .next().type(5)
      .next().type(1000)
      .next().type('Test boat')
    cy.get('.user-input').submit()
  });

  // it('shows individual listing', () => {
  //   cy.visit('http://localhost:3000/listings')
  //   cy.get('.listing_display').click('#picture-1')
  //     .contains('Boat')
  // });
});
