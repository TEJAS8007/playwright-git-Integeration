import {test,expect} from '../../fixtures/hooks.fixture';
import loginData from '../../data-files/ui-data/login-module-data.json';


test('Login with valid credentials',{
    tag : ['@UI',"@SMOKE"],
    annotation : {
        type : 'TestCase',
        description : "Verify that user can perform login with valid username and password"
    }
},async({loginPage})=> {
    
    const username = process.env.USER_NAME!;
    const password = process.env.PASSWORD!;

    await loginPage.openSauceDemoApplication();
    await loginPage.verify_title(loginData.title);
    await loginPage.LoginIntoSauceApplication(username,password);

});

test('Login with Invalid credentials',{
    tag : ['@UI','@SMOKE'],
    annotation : {
        type : 'Test Case',
        description : 'Verify that user cannot login with Invalid credentials'
    }
},async({loginPage})=> {

    await loginPage.openSauceDemoApplication();
    await loginPage.verify_title(loginData.title);
    await loginPage.LoginIntoSauceApplication(loginData['incorrect-username'],loginData['incorrect-password']);
   
    await expect(loginPage.eror_msg).toContainText(loginData.error_msg);
});

test('Login with valid username and invalid password',{
    tag : ['@UI','@SMOKE'],
    annotation : {
        type : 'Test Case',
        description : 'Verify that user cannot login with valid username and invalid password'
    }
},async({loginPage}) => {       
    
    await loginPage.openSauceDemoApplication();
    await loginPage.LoginIntoSauceApplication(loginData['correct-usernames'],loginData['incorrect-password']);
    await expect(loginPage.eror_msg).toContainText(loginData.error_msg);
});

test('Login with Invalid username and valid password',{
    tag : ['@UI','@SMOKE'],
    annotation : {
        type : 'Test Case',
        description : 'Verify that user cannot login with Invalid username and valid password'
    }
},async({loginPage}) => {       
    
    await loginPage.openSauceDemoApplication();
    await loginPage.LoginIntoSauceApplication(loginData['incorrect-username'],loginData['correct-password']);
    await expect(loginPage.eror_msg).toContainText(loginData.error_msg);
});

test('Directly clicking on login button',{
    tag : ['@UI','@SMOKE'],
    annotation : {
        type : 'Test-Case',
        description : 'verify that username and password fileds cant be empty'
    }
},async({loginPage}) => {

    await loginPage.openSauceDemoApplication();
    await loginPage.LoginIntoSauceApplication(' ',' ');

    await expect(loginPage.eror_msg).toContainText(loginData.error_msg);
});

test('verify that user can logout',{
    tag : ['@UI','@SANITY']
},async({loginPage,productPage})=> {

    const username = process.env.USER_NAME!;
    const password = process.env.PASSWORD!;

    await loginPage.openSauceDemoApplication();
    await loginPage.LoginIntoSauceApplication(username,password);

    await productPage.MenuButton.click();
    await productPage.logOutButton.click();
});