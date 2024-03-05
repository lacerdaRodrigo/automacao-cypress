/// <reference types="cypress" />

describe('area de login', () => {

    const senhaInvalida = 'Wrong password.'
    const usuarioInvalido = 'User does not exist.'

    it('deve entrar com um Password invalido', () => {

        cy.visit('https://www.demoblaze.com/index.html');
        cy.login('rpl','qwer',)
        cy.msgSenhaInvalida(senhaInvalida); 
        
    })

    it('deve entrar com um Username invalido', () => {

        cy.visit('https://www.demoblaze.com/index.html');
        cy.login('rpo','pwd12345',)
        cy.msgSenhaInvalida(usuarioInvalido)
        
    })

    it('deve fazer um login valido', () => {

        cy.visit('https://www.demoblaze.com/index.html');
        cy.login('rpl','pwd123',)
        cy.validarLogin('Welcome rpl')
         
    })
})

