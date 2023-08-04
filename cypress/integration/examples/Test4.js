//Cypress - Test file or Spec file
describe('My Second Test Suite', function()
//Test Suite starts from here
{
it('Navigate to Rahulshetty practice website', function()
{
//First Test Case start from here
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Handling Alerts and Pop-ups
cy.get('#alertbtn').click()
cy.get('input[value=Confirm]').click()

//To handle an alert an event called window:alert will be used
cy.on('window:alert',(str)=>
{
    //using Moha framework
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

//To handle an confirm pop-up an event called window:confirm will be used
cy.on('window:confirm',(str)=>
{
    //using Moha framework
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

//Handling child tab window

//As cypress don't handles child tab windows we need to manipulate the DOM and remove 'target' attribute from it
//Why we need to remove target attribute? Because if we will remove target attribute from DOM then it will open the URL in the same window instead of a child or new browser window
//To remove target attribute we need to use jQuery function called 'removeAttr'
//And 'invoke' is a cypress method which will help us to invoke jQuery method in DOM
cy.get('#opentab').invoke('removeAttr','target').click()
//Add an assertion to check if we are on the right page

//To navigate back to previous or forward pages we can simply use 'go' command by passing an argument 'forward' or 'back'

//Need to investigate this
cy.origin('https://www.qaclickacademy.com/',function()
{
    //Assert using includes method
    //'Url' is a method through which we can get the page active URL
    cy.url().should('include','qaclickacademy')
    cy.go('back')
})








}

)

}


)