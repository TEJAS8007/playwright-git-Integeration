import {test,expect} from '../../fixtures/hooks.fixture';
import e2edata from '../../data-files/ui-data/checkout-module-data.json';

test('verifying end_to_end product purchase',{
    tag : ['@UI','@e2e']
},async({gotoUrl,productPage,cartPage,checkoutPage,paymentPage})=> {

    await cartPage.click_on_second_product();
    await cartPage.clickOnCheckoutButton();

    await checkoutPage.verifyCheckoutTitle(e2edata.title);
    await checkoutPage.add_customer_details(
        e2edata.firstName,
        e2edata.lastName,
        e2edata.zipcode
    );

    await paymentPage.verifying_payment_details();

})