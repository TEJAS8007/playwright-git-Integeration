import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import { ProductPage } from '../Pages/ProductPage';
import { CartPage } from '../Pages/CartPage';

type myfixtureType = {
    loginPage : LoginPage,
    productPage : ProductPage,
    cartPage : CartPage
    
}

export const test = baseTest.extend<myfixtureType> ({

    loginPage : async({page},use) => {
        await use(new LoginPage(page));
    },
    productPage : async({page},use) => {
        await use(new ProductPage(page));
    },
    cartPage : async({page},use)=> {
        await use(new CartPage(page));
    }
});