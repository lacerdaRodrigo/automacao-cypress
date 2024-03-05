/// <reference types="cypress" />


describe('adicionar celular em carrinho', () => {


    it('adicionar ao carrinho celular Samsung galaxy s6', () => {

        //Visitar site
        cy.visit('https://www.demoblaze.com/index.html');
        //Login
        cy.login('rpl', 'pwd123', 'Welcome rpl')
        // DADO que tenho que comprar um celular samsung galaxy s6
        cy.categoria()
        cy.categoriaCelular('Samsung galaxy s6', '$360')
        cy.adicionarCarrinho()
        cy.msgProdutoAdicionado()
        cy.voltarHome()
    })
})

