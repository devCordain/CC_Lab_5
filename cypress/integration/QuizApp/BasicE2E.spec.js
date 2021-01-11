describe('BasicFunctions', () => {
    const BASE_URL = 'https://localhost:32809/' //add base url after run
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
        cy.get('#answers').children().first().should('satisfy', ($el) => {
            const classList = Array.from($el[0].classList);
            return classList.includes('correct') || classList.includes('incorrect')
        });
    })
    it('Should return to the homepage in order to reset the state of the webapp', () => {
        cy.visit(BASE_URL);
        cy.url().should('eq', BASE_URL);
    })
})