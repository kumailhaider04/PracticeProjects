
//To import a class which we created to design 'page object desgin pattern' we have to initilize here
//As 'page object design pattern' is not a part of Cypress so we need to import and export it everytime
import HomePage from "../PageObject/HomePage"

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
        //To use the class imported above we need to create an object first
        const homePage=new HomePage()
        //homePage is an object and HomePage() is a class

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        //Now calling the methods from page object class by using the object 'homePage'
        homePage.NameBox().type(this.data.name)
        //In this.data.name data is a variable that we are using to get data from our json file and name or gender is a key for actual data value
        homePage.SelectGender().select(this.data.gender)

        //Verifying angular two-way data building
        //When you enter a value in one text box and it replicate the value in other text box as well
        //So verifying the value from the other text box now
        homePage.TwoWayBindingBox().should('have.value',this.data.name)

        //To check if minimum lenght for the text box is 2 or not by retriving the attribute value
        //By writing an attribute name first and then writing (The value can be a number or string)
        //For example if the attribute is 'required type' then the value could be 'text'
        homePage.NameBox().should('have.attr','minlength','2')

        //To verify if we have a disabled element present
        homePage.EnterpreneurRadio().should('be.disabled')

        //To navigate to shop page
        homePage.ShopButton().click()

    })
})