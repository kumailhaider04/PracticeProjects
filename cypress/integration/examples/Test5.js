describe('Test Suite', function()
{
    it('First Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //How to handle Web Tables
        //To get the second coloumn of any table we use ':nth-child(2)'
        cy.get('tr td:nth-child(2)').each(($e1, index, $list)=>
        {
            const Text=$e1.text()
            if(Text.includes('Python'))
            {
                //The 'next' method only works with cy.get() command so we need to tell the system again about where we are
                //As 'text()' is not a cypress method so we need to resolve the promise here manually
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const CoursePrice = price.text()
                    expect(CoursePrice).to.equal('25')
                })
            }
        })
    }
    )
}
)