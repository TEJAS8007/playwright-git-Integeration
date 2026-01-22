import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class CartPage {

    readonly page:Page;
    readonly productAddToCartButton : Locator;
    readonly cartButton : Locator;
    readonly productName : Locator;
    readonly productInfo : Locator;
    readonly productPrice : Locator;
    readonly continueShopping : Locator;

    constructor(page:Page) {
        this.page=page;

        this.productAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartButton = page.locator('[data-test="shopping-cart-link"]');

        this.productName = page.locator("[data-test='inventory-item-name']");
        this.productInfo = page.locator("[data-test='inventory-item-desc']");
        this.productPrice = page.locator("[data-test='inventory-item-price']");
        this.continueShopping = page.locator("[data-test='continue-shopping']");
    }

    /**
     * Adding product to cart
     */
    async addProductToCart() {
        await this.productAddToCartButton.click();
        await this.cartButton.click();
    }

    /**
     * verifying product information in cart page
     */
    async verifyProductInCart() {

        await this.productAddToCartButton.click();
        await this.cartButton.click();

        const names : any = await this.productName.textContent();
        console.log(names);

        const info : any = await this.productInfo.textContent();
        console.log(info);

        const price : any = await this.productPrice.textContent();
        console.log(price);

        await expect(this.continueShopping).toBeEnabled();
        await this.continueShopping.click();
    }
}