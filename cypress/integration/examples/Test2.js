//Cypress - Test file or Spec file
/// <reference types ='cypress' />
describe('My Second Test Suite', function()
//Test Suite starts from here
{
it('Navigate to Rahulshetty practice website', function()
{
//First Test Case start from here
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
//Second test case starts from here
cy.wait(2000)
//To optimize code we can use alias method referred as '.as('name')' given by cypress
cy.get('.products').as('ParentItem')
//Trying to click and add to cart 'Capsicum'
//cy.get(':nth-child(3) > .product-action > button').click()
//Dynamically add Cashews to the cart by using 'each' method and 'if' condition
cy.get('@ParentItem').find('.product').each(($e1, index, $list)=> {

const VegText = $e1.find('h4.product-name').text()

if (VegText.includes('Cashews'))
{
cy.wrap($e1).find('button').click()
//To do with normal comand by searching for text
//cy.wrap($e1).contains('ADD TO CART').click()

}


})
//Dynamic adding an item is ending here

cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.get(':nth-child(14)').click()










}

)

}


)