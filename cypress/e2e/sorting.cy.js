import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'

describe('Filtro de Ordenação', () => {
  beforeEach(() => {
    loginPage.visit()
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')
  })

  it('deve ordenar produtos por preço do menor para o maior (Low to High)', () => {
    inventoryPage.selectSortOption('lohi')

    inventoryPage.getProductPrices().then((prices) => {
      const valores = [...prices].map((el) =>
        parseFloat(el.innerText.replace('$', ''))
      )
      const ordenado = [...valores].sort((a, b) => a - b)
      expect(valores).to.deep.equal(ordenado)
    })
  })
})