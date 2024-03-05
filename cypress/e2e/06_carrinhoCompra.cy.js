/// <reference types="cypress" />

describe('carrinho de compras', () => {


    it('fazer a venda que esta no carrinho', () => {


        cy.visit('https://www.demoblaze.com/index.html');
        //Login
        cy.login('rpl', 'pwd123', 'Welcome rpl')
        cy.get('#cartur').click().wait(2000);
        cy.validarProdutoCarrinho('Samsung galaxy s6', 'Nokia lumia 1520').wait(2000)
        // E clico em "place order"
        cy.clicarBotaoEncomendar().wait(2000)
        // ENTÂO vou para "place order"
        cy.preencherEncomenda().wait(2000)
        cy.clicarComprar()
        cy.validarVenda()
        cy.get('.confirm').click().wait(4000)
        //cy.voltarHome()

    })
})