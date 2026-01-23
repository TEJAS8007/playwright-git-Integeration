import {test} from '../../fixtures/hooks.fixture';

test('Adding product to cart',{
    tag: ['@UI','@SANITY'],
    annotation : {
        type : 'Test Case',
        description : 'Verify that user can able to add product to cart'
    }
},async({cartPage,gotoUrl})=> {

    await cartPage.addProductToCart();
});

test('verify product added in cart',{
    tag : ['@UI','@API'],
    annotation : {
        type : 'Test Case',
        description : 'verify that user able to add product in cart'
    }
},async({cartPage,gotoUrl})=>{

    await cartPage.verifyProductInCart();
});