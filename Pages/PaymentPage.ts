import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class PaymentPage {

    page : Page;
    productName : Locator;
    productInfo : Locator;
    productPrice : Locator;

    paymentInfo : Locator;
    shippingInfo : Locator;
    totalPrice  : Locator;
    finishButton : Locator;

    constructor(page:Page) {
        this.page=page;

        this.productName = page.locator("[data-test='inventory-item-name']");
        this.productInfo = page.locator("[data-test='inventory-item-desc']");
        this.productPrice = page.locator("[data-test='inventory-item-price']");

        this.paymentInfo = page.locator("[data-test='payment-info-value']");
        this.shippingInfo = page.locator("[data-test='shipping-info-value']");
        this.totalPrice = page.locator("[data-test='total-label']");
        this.finishButton = page.locator("[data-test='finish']");
    }

    async verifying_payment_details() {

        const prod_Name : string | null = await this.productName.textContent();
        console.log(prod_Name);

        const prod_info : string | null = await this.productInfo.textContent();
        console.log(prod_info);

        const prod_price : string | null = await this.productPrice.textContent();
        console.log(prod_price);

        const pay_info : string | null = await this.paymentInfo.textContent();
        console.log(pay_info);

        const ship_info : string | null = await this.shippingInfo.textContent();
        console.log(ship_info);

        const total_price : string | null = await this.totalPrice.textContent();
        console.log(total_price);

        await expect(this.finishButton).toBeVisible();
        await this.finishButton.click();
        
    }
}