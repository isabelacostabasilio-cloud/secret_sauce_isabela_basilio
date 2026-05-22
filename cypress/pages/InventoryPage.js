class InventoryPage {
  elements = {
    productList: () => cy.get('.inventory_item'),
    sortDropdown: () => cy.get('[data-test="product-sort-container"]'),
    productPrices: () => cy.get('.inventory_item_price'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    cartIcon: () => cy.get('.shopping_cart_link'),
  }

  getAddToCartButton(productName) {
    return cy.contains('.inventory_item', productName)
      .find('button')
  }

  addProductToCart(productName) {
    this.getAddToCartButton(productName).click()
  }

  selectSortOption(option) {
    this.elements.sortDropdown().select(option)
  }

  goToCart() {
    this.elements.cartIcon().click()
  }

  getProductPrices() {
    return this.elements.productPrices()
  }
}

export default new InventoryPage()