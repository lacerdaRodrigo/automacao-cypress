/// <reference types="cypress" />

describe('adicionar notebook em carrinho ', () => {


    it('comprar notebook', () => {

        cy.visit('https://www.demoblaze.com/index.html');
        //Login
        cy.login('rpl', 'pwd123', 'Welcome rpl')
            .wait(1000)

        cy.notebook()
        cy.validarClicarNotebook()


        //Validar 
        cy.contains('h2', 'MacBook Pro').should('be.visible')
        cy.contains('#tbodyid', '$1100').should('be.visible')

cy.adicionarCarrinho()

    })
})