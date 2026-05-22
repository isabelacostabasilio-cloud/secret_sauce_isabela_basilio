import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'

describe('Fluxo de Compra Completo (E2E)', () => {
  beforeEach(() => {
    loginPage.visit()
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')
  })

  it('deve completar uma compra do início ao fim', () => {
    // Adiciona dois produtos
    inventoryPage.addProductToCart('Sauce Labs Backpack')
    inventoryPage.addProductToCart('Sauce Labs Bike Light')

    // Valida badge do carrinho
    inventoryPage.elements.cartBadge().should('have.text', '2')

    // Vai para o carrinho
    inventoryPage.goToCart()
    cy.url().should('include', '/cart')

    // Valida os produtos no carrinho
    cartPage.getCartItemNames().should('contain', 'Sauce Labs Backpack')
    cartPage.getCartItemNames().should('contain', 'Sauce Labs Bike Light')

    // Inicia checkout
    cartPage.clickCheckout()
    cy.url().should('include', '/checkout-step-one')

    // Preenche dados de envio
    cartPage.fillShippingInfo('Isabela', 'Basilio', '01310-100')
    cartPage.clickContinue()
    cy.url().should('include', '/checkout-step-two')

    // Finaliza a compra
    cartPage.clickFinish()
    cy.url().should('include', '/checkout-complete')

    // Valida mensagem de sucesso
    cartPage.getSuccessMessage()
      .should('be.visible')
      .and('contain', 'Thank you for your order!')
  })
})