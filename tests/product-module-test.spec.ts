import {test} from '../fixtures/hooks.fixture';


test('verifying product Name',{
    tag : ['@UI','@SANITY'],
    annotation : {
        type : 'Test Case',
        description : 'Verify the product Names listed on Home Page' 
    }
},async({productPage,gotoUrl})=> {

    await productPage.verify_productName();
});

test('verifying product Info',{
    tag : ['@UI','@SANITY'],
    annotation : {
        type : 'Test Case',
        description : 'Verify the product Info listed on Home Page' 
    }
},async({productPage,gotoUrl})=> {

    await productPage.verify_productInfo();
});

test('verifying product Prices',{
    tag : ['@UI','@SANITY'],
    annotation : {
        type : 'Test Case',
        description : 'Verify the product Prices listed on Home Page' 
    }
},async({productPage,gotoUrl})=> {

    await productPage.verify_productPrice();
});

test('verifying product filter Dropdown',{
    tag : ['@UI','@SANITY'],
    annotation : {
        type : 'Test Case',
        description : 'Verify the product Filter DropDown listed on Home Page' 
    }
},async({productPage,gotoUrl})=> {

    await productPage.verify_productName();
});