import {test as baseTest} from '../fixtures/pom.fixture';

type hooksfixturetype = {
    gotoUrl : void;
    closeapplication : void;
}

export const test = baseTest.extend<hooksfixturetype> ({

    gotoUrl : async({page},use)=> {
        await page.goto(`${process.env.BASE_URL!}/inventory.html`);
        use();
    },
    closeapplication : async({page},use)=> {
        await page.close();
        use();
    }
})