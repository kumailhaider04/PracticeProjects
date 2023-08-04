// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


//Creating Kumail's custom command here

Cypress.Commands.add('SelectProduct',(itemName)=>
{
    //find the product title
    cy.get('h4.card-title').each((el, index, list)=>
    {
        //Saving item name in a constant variable
        const card=el.text()
        //Applying condition to match the item name
        if(card.includes(itemName))
        {
            //adding the same item to the cart
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })