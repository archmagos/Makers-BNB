/// <reference types="Cypress" />

context('Listings', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.user-input')
      .find('#title').type('Boat')
      .next().type(300)
      .next().type('Test boat')
    cy.get('.user-input').submit()
  });
  it('adds a new listing and displays it on the listings page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.user-input')
      .find('#title').type('Boat')
      .next().type(300)
      .next().type('Test boat')
    cy.get('.user-input').submit()
    cy.visit('http://localhost:3000/listings')
      .contains('Boat')
  });
});
