// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('fillDemoQAForm', (userData) => {
  cy.get('#firstName').clear().type(userData.firstName);
  cy.get('#lastName').clear().type(userData.lastName);
  cy.get('#userEmail').clear().type(userData.email);
  cy.contains('label', userData.gender).click();
  cy.get('#userNumber').clear().type(userData.mobile);
});

Cypress.Commands.add('verifyFormSubmission', (expectedData) => {
  cy.get('#example-modal-sizes-title-lg')
    .should('be.visible')
    .and('contain', 'Thanks for submitting the form');
  
  cy.get('.modal-body .table').within(() => {
    cy.contains('td', 'Student Name')
      .next()
      .should('contain', `${expectedData.firstName} ${expectedData.lastName}`);
    
    cy.contains('td', 'Student Email')
      .next()
      .should('contain', expectedData.email);
    
    cy.contains('td', 'Gender')
      .next()
      .should('contain', expectedData.gender);
    
    cy.contains('td', 'Mobile')
      .next()
      .should('contain', expectedData.mobile);
  });
});