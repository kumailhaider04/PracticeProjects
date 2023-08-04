//Building a custom command/function for Cypress (Hard code that we converted in next test)

describe('Framework Practice Suite', function()
{
    before(function()
    {
        //All the methods needs to be executed before running all test cases in this suit should be written here
        cy.fixture('TestData').then(function(data)
        {
            //'this' is a method to introduce variable globally (out of this class as well)
            this.data=data
            //In this.data=data both 'data' are different variables
        })
    })
    //'beforeEach' method can be used to execute any code before each test case in this suit

    it('Frist Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        //Now going to shop a product from this site
        //Click on shop button
        cy.get(':nth-child(2) > .nav-link').click()
        //find the product title
        cy.get('h4.card-title').each((el, index, list)=>
        {
            //Saving item name in a constant variable
            const card=el.text()
            //Applying condition to match the item name
            if(card.includes('Blackberry'))
            {
                //adding the same item to the cart
                cy.get('button.btn.btn-info').eq(index).click()
            }
        })

    })
})