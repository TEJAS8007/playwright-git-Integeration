import {test} from '../../fixtures/hooks.fixture';

test('verifying end_to_end product purchase',{
    tag : ['@UI','@e2e']
},async({gotoUrl,productPage,cartPage,checkoutPage,paymentPage})=> {

    await cartPage.click_on_second_product();
    await cartPage.clickOnCheckoutButton();

    await checkoutPage.verifyCheckoutTitle('Checkout: Your Information');
    await checkoutPage.add_customer_details('steve','Rogers','ZZZ212');

    await paymentPage.verifying_payment_details();

})