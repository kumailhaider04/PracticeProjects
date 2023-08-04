
describe('Practice for OLX', function()
{
    it('First Test Case', function()
    {
        cy.visit('https://www.olx.com.pk/')
        //Adding 2 secs extra wait so that the website should be loaded properly
        cy.wait(2000)
        cy.get('._1075545d > .cb8c9afa > .f6c2c5a2 > .fc60720d').type('honda civic')
        cy.get('.a3e390b5').click()
        //As there are two filters with the same 'class name', so using index to grab the correct one
        cy.get('div.f6c2c5a2 input[value=Pakistan]').eq(1).click()
        //Using each method so we can find sindh in filters and select it
        cy.get('._4b2c6986').each(($e1, index, $list)=>
        {
            const Province=$e1.text()
            if(Province.includes('Sindh'))
            {
                cy.get($e1).click()
            }

        })
        //Putting two different assertions
        cy.get('._7597a67d.dd224544').should('have.text','Sindh')
        cy.url().should('include','sindh')

    }
    )
}
)