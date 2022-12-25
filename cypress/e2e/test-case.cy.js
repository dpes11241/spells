describe('Navigation', () => {
  it('should contain List of spells', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // The new page should contain an h2 with "List of spells"
    cy.get('h2').contains('List of spells')
  })
})