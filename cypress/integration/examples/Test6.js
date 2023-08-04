describe('Mouse Hover Suite', function()
{
    it('First Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //As Cypress does not support mouse hover so we need to invoke jQuery method 'show' which will show all hidden elements
        //'show' method should be applied on immediate parent of hidden elements
        cy.get('div.mouse-hover-content').invoke('show')
        cy.get('a[href="#top"]').click()
        //If we don't want to use jQuery 'show' method then we can also use {force: true} argument with click method to forcefully click on hidden element without showing it
        //cy.get('a[href="#top"]').click({force: true})
        //Or we can also use 
        //cy.contains('Top').click()
        
        //Added an assertion if the url has been changed or not
        cy.url().should('include','top')
    })
})