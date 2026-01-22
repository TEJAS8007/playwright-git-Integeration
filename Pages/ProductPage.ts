import { Locator, Page } from "playwright";

export class ProductPage {

    readonly page:Page;
    readonly MenuButton : Locator;
    readonly logOutButton : Locator;
    readonly productName : Locator;
    readonly productInfo : Locator;
    readonly productPrice : Locator;
    readonly filterDropdown : Locator;


    constructor(page:Page) {
        this.page=page;

        this.MenuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logOutButton = page.locator('[data-test="logout-sidebar-link"]');
        this.productName = page.locator("//*[@class='inventory_item_label']/descendant::a");
        this.productInfo = page.locator("//*[@class='inventory_item_desc']");
        this.productPrice = page.locator("//*[@class='inventory_item_price']");
        this.filterDropdown = page.locator("[data-test='product-sort-container']");
    }

    /**
     * verifying product names displayed on Home Page
     */
    async verify_productName() {

        const count : number = await this.productName.count();

        for(let a=0;a<count;a++) {
            const name = await this.productName.nth(a).textContent();
            console.log(name);
        }
    }

    /**
     * verifying product information of products displayed on Home Page
     */
    async verify_productInfo() {

        const count : number = await this.productInfo.count();

        for(let a=0;a<count;a++) {
            const info = await this.productInfo.nth(a).textContent();
            console.log(info);
        }
    }

    /**
     * verifying prices of  products displayed on Home Page
     */
    async verify_productPrice() {

        const count : number = await this.productPrice.count();

        for(let a=0;a<count;a++) {
            const price = await this.productPrice.nth(a).textContent();
            console.log(price);
        }
    }

    /**
     * Verifying product filter functionality working or not
     */
    async verifyProductFilterOptions() {

        const options : string[] = ['az','za','lohi','hilo'];

        for(let option of options) {
            await this.filterDropdown.selectOption(option);
            await this.page.waitForTimeout(300);
        }
    }
}