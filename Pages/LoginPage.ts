import { Locator, Page , expect} from '@playwright/test';

export class LoginPage {

    readonly page : Page;
    readonly UsernameBox : Locator;
    readonly passwordBox : Locator;
    readonly loginButton : Locator;
    readonly eror_msg : Locator;

    constructor(page:Page) {
        this.page=page;

        this.UsernameBox = page.locator('[data-test="username"]');
        this.passwordBox = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.eror_msg = page.locator('//h3[@data-test]');
    }
    /**
     * opening Sauce Demo Application
     */
    async openSauceDemoApplication() {
        await this.page.goto(process.env.BASE_URL!);
    }
 
    /**
     * 
     * @param title 
     * verifyig title of sauce Demo Application
     */
    async verify_title(title:string) {
       await expect(this.page).toHaveTitle(title);
    }

    /**
     * 
     * @param username 
     * @param password 
     * performin Login into Sauce Demo Application
     */
    async LoginIntoSauceApplication(username:string,password:string) {
       await this.UsernameBox.fill(username);
       await this.passwordBox.fill(password);
       await this.loginButton.click();

       await this.page.waitForTimeout(3000);
    }

}