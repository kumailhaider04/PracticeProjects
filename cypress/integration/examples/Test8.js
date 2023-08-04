//These commands are used to give auto suggestions related to commands

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

//We installed and imported this iframe package for cypress
import 'cypress-iframe'

describe('Test Suite', function()
{
    it('Test Case 1', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Handling iframes
        //With the below mentioned command we are loading iframe for cypress
        cy.frameLoaded('#courses-iframe')
        //With the below mentioned command we are telling Cypress to switch into iframe mode which we have loaded above
        //We need to use 'find' method because there were multiple elements with the same css
        
        cy.iframe().find('a[href*=mentorship]').eq(0).click()
        //Every time when we need to perform an opertation inside iframe we always have to use 'iframe()' method first

  
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2);





    })
})