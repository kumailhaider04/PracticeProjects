

//Building a custom command and parameterizing the test data

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
        
        //In TestData file we've added multile product names and defined ProductName as array by simply adding [] brackets
        //we need to write 'this.data.Product' to access the data inside this array
        const DataArray=this.data.ProductName
        //Or even we can simply write it directly as this.data.ProductName
        
        //Now in future if we will have 10 item or even more, then for it we can use 'foreach' method to retrieve each of it
        //To see more details https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        DataArray.forEach(function(element)
        {
            //'SelectProduct' is a command that we developed in commands.js to get the product
            cy.SelectProduct(element)
        })
        //We can use cy.pause() command to hold the test at any point and debug the problem at runtime then with the help of 'Resume' button we can resume our test
        

    })
})