import {test} from '@playwright/test';

test('Google_title_test',async({page})=> {

    await page.goto('https://www.google.com/');
    const title : string = await page.title();
    console.log('Title : ',title);
});