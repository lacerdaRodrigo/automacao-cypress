/// <reference types="cypress" />



describe('criar conta', () => {

    const contaCriadaComSucesso = 'Sign up successful.'
    const contaJaExiste = 'This user already exist.' //

    it('deve criar um usuario para fazer login', () => {

        cy.visit('https://www.demoblaze.com/index.html');
        cy.criarUmaConta('ghb', 'pwd123')


        //Verificar esse if e else
        // if (contaJaExiste === contaCriadaComSucesso) {
        //     cy.msgContaJaExiste(contaJaExiste)
        // } else {
        //     cy.msgContaCriadaComSucesso(contaCriadaComSucesso)
        // }

    })
})






