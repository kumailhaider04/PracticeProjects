//Cypress - Test file or Spec file
describe('My Second Test Suite', function()
//Test Suite starts from here
{
it('Navigate to Rahulshetty practice website', function()
{
//First Test Case start from here
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//.check can be used to click check boxes or radio buttons
//.and can be used after .should method to add multiple assertions
//'be' method is an assertion to check the behaviour and 'have' method is an assertion to check the property 
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
//'uncheck' method is used to uncheck the checkbox or radio buttons
//'not.be' can be used to see if the behaviour does not exists
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//selection of multiple check boxes
//select specific multiple check boxes by specifying their value in an argument
cy.get('input[type="checkbox"]').check(['option2','option3'])

//How to handle static and dynamic dropdowns
//Static dropdown always uses 'select' as a tagname

//Static Dropdown
//'select' method is used with select tagname and through it we can just mention the dropdown text or value attribute directly
cy.get('select').select('option2').should('have.value','option2')

//Dynamic Dropdown

cy.get('#autocomplete').type('Pa')
//As Dynamic dropdowns are a little more tricky so we need to take common element(class/id etc) and use each function to get the text
cy.get('.ui-menu-item').each(($e1, index, $list)=>
{

    if ($e1.text()=="Pakistan")
    {
        cy.wrap($e1).click()
    }
})
cy.get('#autocomplete').should('have.value','Pakistan')


//cy.get('.ui-menu-item').each(($e1, index, $list)=>
//{
//    const SelectCountry = $e1.text()
//
//    if (SelectCountry=="Pakistan")
//    {
//        cy.wrap($e1).click()
//    }
//})

//Handling visible and invisible elements using assertion
//Assertion on behaviour of any eletment is using should(be.behaviour) e.g Should(be.visible), Should(be.not.visible), Should(be.checked), Should(be.disabled) etc
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')


//Handling Radio buttons

cy.get('input[value=radio2]').check().should('be.checked').and('have.value','radio2')










}

)

}


)