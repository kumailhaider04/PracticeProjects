class DeliveryPage
{
    SearchAddress()
    {
        return cy.get('#country')
    }
    SelectPakistan()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    TermsCheckbox()
    {
        return cy.get('label[for=checkbox2]')
    }
    PurchaseButton()
    {
        return cy.get('.ng-untouched > .btn')
    }
    Alert()
    {
        return cy.get('.alert')
    }

}

export default DeliveryPage;