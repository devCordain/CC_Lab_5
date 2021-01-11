describe('BasicFunctions', () => {
    const BASE_URL = 'https://localhost:49183/' //add base url after run
    it('Should load homepage', () => {
        cy.visit(BASE_URL);
    })
    it('Should load random quiz page', () => {
        cy.visit(BASE_URL + 'Quiz/Random');
        cy.url().should('eq', BASE_URL + 'Quiz/Random')
    })
    it('Should contain a quiz', () => {
        cy.get('#answers');
    })
    it('Should ensure that pushing a button adds class and removes onlick', () => {
        cy.get('#answers').children().first().click();
        cy.get('#answers').children().first().should('not.have.attr', 'onclick');
        cy.get('#answers').children().first().should('have.class', 'incorrect');
    })     
})