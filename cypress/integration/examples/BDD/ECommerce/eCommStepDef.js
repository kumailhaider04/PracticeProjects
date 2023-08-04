import HomePage from "/Users/naqvi/Downloads/Practice Code/CypressAutomation/cypress/integration/examples/BDD/ECommerce/PageObject/HomePage"
import ShopPage from "/Users/naqvi/Downloads/Practice Code/CypressAutomation/cypress/integration/examples/BDD/ECommerce/PageObject/ShopPage"
import CartPage from "/Users/naqvi/Downloads/Practice Code/CypressAutomation/cypress/integration/examples/BDD/ECommerce/PageObject/CartPage"
import DeliveryPage from "/Users/naqvi/Downloads/Practice Code/CypressAutomation/cypress/integration/examples/BDD/ECommerce/PageObject/DeliveryPage"

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


const homePage=new HomePage()
const shopPage=new ShopPage()
const cartPage=new CartPage()
const deliveryPage=new DeliveryPage()

Given('Open the eCommerce store',function()
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})
When('Select desirable products',function()
{
    //Click on shop button
    homePage.ShopButton().click()
        
    //In TestData file we've added multile product names and defined ProductName as array by simply adding [] brackets
    //we need to write 'this.data.Product' to access the data inside this array
    const DataArray=this.data.ProductName
    //Or even we can simply write it directly as this.data.ProductName
    
    //Now in future if we will have 10 item or even more, then for it we can use 'foreach' method to retrieve each of it
    //To see more details https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    DataArray.forEach(function(element)
    {
        //'SelectProduct' is a method used for selecting any product
        cy.SelectProduct(element)
    })
    //we can also use contain method locate checkout button
    //cy.contains('Checkout').click()
    shopPage.CheckoutButton().click()
})
Then('Validate the total price',()=>
{
            //declaring a variable as 0 so we can use it later
            var Total=0
            //Now we have to check if the total cost displayed is correct or not?
            cartPage.ProductAmount().each((el, index, list)=>
            {
                //To fetch price of each product
                const Price=el.text()
                //To split the string where space is present
                var ItemPrice= Price.split(" ")
                //We used 'var' here so that we could able reuse this variable
    
                //After spliting it will be divide into two index and became an array so we are just taking the 2nd index which is [1]
                ItemPrice=ItemPrice[1].trim()
    
                //Now adding the total cost and saving it in another variable
                //In JavaScript we need to define that this is a number but not a string
                Total=Number(Total)+Number(ItemPrice)            
            }).then(function()
            {
                //When we want cypress to print this value only after each loop is completed then we need to resolve the promise first as the above mentioned code is pure JavaScript not Cypress commands
                cy.log(Total)
                //just doing it with simple assertion
                cartPage.TotalAmount().should('contain','115000')
                //If we want to compare it as two numbers then we have to repeat same process for 'TotalAmount' and then use expect assertion: For ref: https://docs.cypress.io/guides/references/assertions
            })
    
            //clicking on checkout button again to process
            cartPage.CheckoutButton().click()    
})
Then('Submit it to be delivered on the correct address and verify Thank you alert',()=>
{
    //Searching for correct address
    deliveryPage.SearchAddress().type('Pak')
        
    //As the application is taking some time to load the values of search box, we will implement wait here
    //We don't need wait separately here as we increased time for this test case above 
    cy.wait(4000)

    //Now select pakistan from the search box
    deliveryPage.SelectPakistan().click()

    //Clicking on Terms and conditions checkbox
    deliveryPage.TermsCheckbox().click()

    //Clicking on Purchase button to confirm the order
    deliveryPage.PurchaseButton().click()

    //Putting an assertion to see if the order is confirmed?
    deliveryPage.Alert().then(function(element)
    {
        const el=element.text()

        //To see what exactly is in the text
        console.log(el)
        //So to see if the text includes 'Success' we will use 'expect' assertion from chai
        expect(el.includes("Success")).to.be.true
    })
})
//In the second scenario as our given behaviour is same so we don't need to write the code for it again

// That is why starting from when
// When I fill the form

When('I fill the form',()=>
{
    //Now calling the methods from page object class by using the object 'homePage'
    homePage.NameBox().type(this.data.name)
    //In this.data.name data is a variable that we are using to get data from our json file and name or gender is a key for actual data value
    homePage.SelectGender().select(this.data.gender)
})

//Then I validate the form data
Then('I validate the form data',()=>
{
    //So verifying the value from the other text box now
    homePage.TwoWayBindingBox().should('have.value',this.data.name)

    //To check if minimum lenght for the text box is 2 or not by retriving the attribute value
    //By writing an attribute name first and then writing (The value can be a number or string)
    //For example if the attribute is 'required type' then the value could be 'text'
    homePage.NameBox().should('have.attr','minlength','2')
    //To verify if we have a disabled element present
    homePage.EnterpreneurRadio().should('be.disabled')
})

//And select the shop page
Then('select the shop page',()=>
{
    //To navigate to shop page
    homePage.ShopButton().click()
})
