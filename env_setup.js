import puppeteer from 'puppeteer-core';
import chromeLauncher from 'chrome-launcher';

export default async function env_setup() {
    const chrome = await chromeLauncher.launch();
    const browser = await puppeteer.connect({ 
        browserURL: `http://127.0.0.1:${chrome.port}`,  ///// CHANGE THE PORT NUMBER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        defaultViewport: null
    });
    const main_page = await browser.newPage();
    await main_page.goto('https://uonline.newcastle.edu.au/');

    return { "main_page": main_page, "browser": browser };
};