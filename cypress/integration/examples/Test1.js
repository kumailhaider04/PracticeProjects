//Cypress - Test file or Spec file
/// <reference types ='cypress' />
describe('My First Test Suite', function()
//Test Suite starts from here
{
it('Navigate to Rahulshetty practice website', function()
{
//First Test Case start from here
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
//Second test case starts from here
cy.wait(2000)

//Asserting along with invisible element
cy.get('.product').should('have.length',5)
//In cypress get acts like find element in selenium
cy.get('.product:visible').should('have.length',4)

//To optimize code we can use alias method referred as '.as('name')' given by cypress
cy.get('.products').as('ParentItem')
//Parent child chaining example
cy.get('@ParentItem').find('.product').should('have.length',4)
//Trying to click and add to cart 'Capsicum'
//cy.get(':nth-child(3) > .product-action > button').click()
//Now trying to click and add to cart 'Capsicum' by using eq and contain method (Parent child chaining) because it is more reliable even if the UI is changed
//eq method is used to find an index in an array
//contains method search for a text what we input
cy.get('@ParentItem').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
    console.log('java commad is synchronous now')
})
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

//to assert if logo text is correct?
cy.get('.brand').should('have.text','GREENKART')


//this is to print logo name in cypress logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
}
)









}

)

}


)