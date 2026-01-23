import { expect } from 'playwright/test';
import {test} from '../../fixtures/hooks.fixture';

test('Global setup for Auto Login',async({loginPage,page})=> {

    const username = process.env.USER_NAME!;
    const password = process.env.PASSWORD!;

    await loginPage.openSauceDemoApplication();
    await loginPage.LoginIntoSauceApplication(username,password);

    await expect(page).toHaveURL(/inventory.html/);

    await page.waitForLoadState('networkidle');
    await page.context().storageState({path:'./Auth-files/Auth/sauce_demo.json'});
    
    
});