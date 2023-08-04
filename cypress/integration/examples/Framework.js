describe('Framework Practice Suite', function()
{
    before(function()
    {
        //All the methods needs to be executed before running all test cases in this suit should be written here
    })
    //'beforeEach' method can be used to execute any code before each test case in this suit

    it('Frist Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        //We will automate data in this test case but later we will use fixtures to populate same data
        cy.get('input[name=name]:nth-child(2)').type('Jenny')
        cy.get('select').select('Female')
    })
})