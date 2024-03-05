/// <reference types="cypress" />


Cypress.Commands.add('login', (username, password, validarLogin) => {

    cy.get('#login2').click().wait(1000)
    cy.get('#loginusername').type(username, { delay: 100 })
    cy.get('#loginpassword').type(password, { delay: 100 })
    cy.get('button[onclick="logIn()"]').click()

})

Cypress.Commands.add('msgSenhaInvalida', (senhaInvalida) => {
    //validar o alerta
    cy.on('window:alert', (mensagem) => {
        cy.log('Alerta exibido: ' + mensagem);
        expect(mensagem).to.equal(senhaInvalida);
    });
})

Cypress.Commands.add('validarLogin', (validar) => {
    cy.contains('#nameofuser', validar,).should('be.visible')


})

Cypress.Commands.add('msgContaCriadaComSucesso', (contaCriadaComSucesso) => {

    //validar o alerta
    cy.on('window:alert', (mensagem) => {
        cy.log('Alerta exibido: ' + mensagem);
        expect(mensagem).to.equal(contaCriadaComSucesso);

    });

})

Cypress.Commands.add('msgContaJaExiste', (contaJaExiste) => {

    //validar o alerta
    cy.on('window:alert', (mensagem) => {
        cy.log('Alerta exibido: ' + mensagem);
        expect(mensagem).to.equal(contaJaExiste);

    });

})

Cypress.Commands.add('criarUmaConta', (username, password) => {

    cy.get('#signin2').click().wait(1000)
    cy.get('#sign-username').type(username, { delay: 100 })
    cy.get('#sign-password').type(password, { delay: 100 })
    cy.get('button[onclick="register()"]').click()

})

Cypress.Commands.add('categoriaCelular', (tipoCelular, valorCelular) => {

    //// DADO que tenho que comprar um celular samsung galaxy s6
    cy.contains('a', tipoCelular).should('be.visible')
    cy.contains('a', tipoCelular)
        .parent()
        .find('.hrefch')
        .click()



})

Cypress.Commands.add('categoria', () => {
    cy.get('#itemc').click()
})

Cypress.Commands.add('msgProdutoAdicionado', () => {


    cy.on('window:alert', (mensagem) => {
        cy.log('Alerta exibido: ' + mensagem);
        expect(mensagem).to.equal('Product added.');
    });
})

Cypress.Commands.add('adicionarCarrinho', () => {

    cy.contains('.btn-success', 'Add to cart').click()

})

Cypress.Commands.add('voltarHome', () => {

    // ENTÂO volto para a tela principal "HOME"
    cy.contains('a', 'Home ').click()

})

Cypress.Commands.add('notebook', () => {
    cy.contains('#itemc', 'Laptops')
        .click()

})

Cypress.Commands.add('validarClicarNotebook', () => {
    //validar e clicar
    cy.contains('a', 'MacBook Pro')
        .should('be.visible')
        .click()

})

Cypress.Commands.add('validarProdutoCarrinho', (celularSansumgGalaxyS6) => {
    cy.contains('h2', 'Products').should('be.visible')
    cy.contains('td', celularSansumgGalaxyS6).should('be.visible')
    
})

Cypress.Commands.add('clicarBotaoEncomendar', () => {
    cy.contains('button', 'Place Order').click()
    cy.get('#orderModalLabel').should('be.visible')
    //cy.contains('#totalm', 'Total: 1180').should('be.visible')

})

Cypress.Commands.add('preencherEncomenda', () => {

    cy.get('#name').type('Rodrigo Lacerda', { delay: 150 })
    cy.get('#country').type('Brasil', { delay: 100 })
    cy.get('#city').type('Santa Luzia - MG', { delay: 100 })
    cy.get('#card').type('123456789', { delay: 100 })
    cy.get('#month').type('06/28', { delay: 100 })
    cy.get('#year').type('2028', { delay: 100 })
})

Cypress.Commands.add('clicarComprar', () => {
    cy.contains('button', 'Purchase').click()
})

Cypress.Commands.add('validarVenda', () => {
    cy.contains('h2', 'Thank you for your purchase!').should('be.visible')
})

