describe('Mouse Hover Suite', function()
{
    it('First Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //To fetch the attribute property we will use jQuery method called 'prop(attribute)'
        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            //Now the url is grabbed through href attribute and stored in a constant variable 'url'
            cy.visit(url)
            cy.origin(url,function()
            //All the triggers or options we need to perform in this specific link need to be done only in this section otherwise cypress will not support it
            {
                //we can locate an element uniquely by coming through it's parent class and if it have multilple parent classes then we can use any one of it as well
                cy.get('div.collapse a[href*=about]').click()
                cy.url().should('include','qaclickacademy.com/about')
                cy.go('back')
                cy.go('back')
            })
        })
    })
})