class CartPage
{
    CheckoutButton()
    {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }
    ProductAmount()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    TotalAmount()
    {
        return cy.get('tr td:nth-child(5) strong')
    }
}

export default CartPage;