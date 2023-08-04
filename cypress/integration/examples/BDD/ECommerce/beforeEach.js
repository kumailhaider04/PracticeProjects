before(function()
    {
        //All the methods needs to be executed before running all test cases in this suit should be written here
        cy.fixture('TestData.json').then(function(data)
        {
            //'this' is a method to introduce variable globally (out of this class as well)
            this.data=data
            //In this.data=data both 'data' are different variables

            console.log(this.data)
        })
    })