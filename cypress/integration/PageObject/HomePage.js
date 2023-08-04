
//Defining the class
class HomePage 
{
    //defining all the methods here so we can easily find them late and change them if needed
    //Grabbed all the elements from home page and created method for each of them here (creating the page objects)
    NameBox()
    {
        //To get the Name Text box
        return cy.get('input[name=name]:nth-child(2)')
    }
    SelectGender()
    {
        //To get the gender selector
        return cy.get('select')
    }
    TwoWayBindingBox()
    {
        //To get the two way binding name box
        return cy.get('h4 input[name=name]')
    }
    EnterpreneurRadio()
    {
        //to get enterpreneur radio button
        return cy.get('input[value=option3]')
    }
    ShopButton()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
}
//To Export this class to all cypress test file we have to do this
export default HomePage;