//Building a custom command/function for Cypress

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
        //Initialing the custom built command for cypress
        //As we need to pass an argument to search for a product name so we stored it in our TestData file with the key as "ProductName"
        cy.SelectProduct(this.data.itemName)
        //We can use this custom command with any parameter and it does not needs to be in data file e.g cy.SelectProduct('Blackberry')
        cy.SelectProduct('Nokia Edge')

    })
})