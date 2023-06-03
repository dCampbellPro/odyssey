beforeEach(() => {
    cy.visit('http://localhost:3000/odyssey/');
})
it('titles are correct', () => {  
    cy.get('h1').should('have.text', 'Hello, my name is Jeanine')
  });

it('navigates to the work page on click', () => {
    cy.get('a').contains('Work').click();
    cy.get('h1').should('have.text', 'My Work')
});

it('correctly colors which page you are at in the top header', () => {
    cy.get('a').contains('Work').click();
    cy.get('h1').should('have.text', 'My Work');
    cy.get('a').contains('Home').should('have.class', 'active') // update test here to not have active
});
