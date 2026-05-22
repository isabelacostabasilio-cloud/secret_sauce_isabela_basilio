import loginPage from '../pages/LoginPage'

describe('Login', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('deve realizar login com sucesso com credenciais válidas', () => {
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')
    cy.get('.inventory_list').should('be.visible')
  })

  it('deve exibir erro ao tentar login com usuário bloqueado', () => {
    loginPage.login('locked_out_user', 'secret_sauce')
    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out')
  })
})