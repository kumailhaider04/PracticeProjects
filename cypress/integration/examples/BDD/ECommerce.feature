Feature: Ecommerce shop automation

    Regression testing for Ecommerce shop

    Scenario: Shopping an item from an eCommerce store
    Given Open the eCommerce store
    When Select desirable products
    Then Validate the total price
    Then Submit it to be delivered on the correct address and verify Thank you alert

    Scenario: Update personal data
    Given Open the eCommerce store
    When I fill the form
    Then I validate the form data
    Then select the shop page