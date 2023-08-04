

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
        //We will automate data in this test case but later we will use fixtures to populate same data
        cy.get('input[name=name]:nth-child(2)').type(this.data.name)
        //In this.data.name data is a variable that we are using to get data from our json file and name or gender is a key for actual data value
        cy.get('select').select(this.data.gender)
        //Verifying angular two-way data building
        //When you enter a value in one text box and it replicate the value in other text box as well
        //So verifying the value from the other text box now
        cy.get('h4 input[name=name]').should('have.value',this.data.name)
        //Pause command can be used for debugging on runtime and then we can 'resume' button to resume the test
        //cy.debug() also performs the same action as pause command, but we should remove it once we are done with debugging
        cy.pause()
        //To check if minimum lenght for the text box is 2 or not by retriving the attribute value
        //By writing an attribute name first and then writing (The value can be a number or string)
        //For example if the attribute is 'required type' then the value could be 'text'
        cy.get('input[name=name]:nth-child(2)').should('have.attr','minlength','2')
        //To verify if we have a disabled element present
        cy.get('input[value=option3]').should('be.disabled')

    })
})