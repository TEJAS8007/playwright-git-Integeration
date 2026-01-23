import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class CheckoutPage {

    page : Page;
    titleCheckout : Locator;
    firstNamefield : Locator;
    lastNamefield  : Locator;
    postNumberfield : Locator;
    continueButton : Locator;

    constructor(page:Page) {
        this.page=page;

        this.titleCheckout = page.locator("[class='title']");
        this.firstNamefield = page.locator("[name='firstName']");
        this.lastNamefield =  page.locator("[name='lastName']");
        this.postNumberfield = page.locator("[name='postalCode']");
        this.continueButton = page.locator("[name='continue']");
    }

    /**
     * 
     * @param title 
     * verifying title of checkout page
     */
    async verifyCheckoutTitle(title:string) {
        await expect(this.titleCheckout).toHaveText(title);
    }

    /**
     * 
     * @param firstName 
     * @param lastname 
     * @param zipcode 
     * entering shipping address details
     */
    async add_customer_details(firstName:string,lastname:string,zipcode:string) {

        await this.firstNamefield.fill(firstName);
        await this.lastNamefield.fill(lastname);
        await this.postNumberfield.fill(zipcode);
        await expect(this.continueButton).toBeVisible();
        await this.continueButton.click();
    }
}