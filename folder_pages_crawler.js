import cheerio from 'cheerio';
import crawl_attachments from './attachments_pages_crawler.js';
import fs from 'fs';

import os from 'os';
// const downloads_path = `${os.homedir()}/Downloads`;

export default async function crawl_folder_pages($, browser, address){
    // const attachments_page = ($('.attachments li a').length != 0) || ($('.liItem h3').text().includes('If this item does not open automatically you can'));
    
    const attachments_page = ($('.attachments li a').length != 0);
    const folder_page = $('h3 a').not('.submenuLink').not('.comboLink').length != 0;

    // Check is the page is a attachmnets page
    if(attachments_page){ crawl_attachments($, browser, address); }

    // Checks if the page is a folder page.
    if(folder_page){ crawl_folders($, browser, address); }
}

// new address for folders - "ul li div h3 a span"

async function crawl_folders($, browser, address){

    const page_title_text = $('#pageTitleText span').text();
    
    $('h3 a').not('.submenuLink').not('.comboLink').each(async (i, elem) => {

        if(!$(elem).attr('href').includes('#')) {

            // const folder_name = $('span', elem).text().replace(/[&\/\\#,+()$~%.'":*?<>]/g, '');
            const folder_name = $('span', elem).text();
            const course_name = $('#crumb_1 .courseName').text();
            var new_address = "";
        
            if(address){ // If some address was passed in the args.
                new_address = address + `${folder_name}/`;
                // fs.mkdir(`${new_address}/`, () => {});
            }
            else{
                new_address = `DOWNLOADED_FILES/${course_name}/` + `${page_title_text}/` + `${folder_name}/`;

                // fs.mkdir(`${downloads_path}/DOWNLOADED_FILES/${$('#crumb_1 .courseName').text()}/`, { recursive: true }, (err) => { }); // Create course folder
                // fs.mkdir(`${downloads_path}/DOWNLOADED_FILES/${$('#crumb_1 .courseName').text()}/` + `${page_title_text}/`, { recursive: true }, (err) => { }); // Create page folder
                // fs.mkdir(`${downloads_path}/DOWNLOADED_FILES/${$('#crumb_1 .courseName').text()}/` + `${page_title_text}/` + `${folder_name}/`, { recursive: true }, (err) => { }); // Create sub-folder
            }

            browser.newPage().then((async (child_page) => {
                await child_page.goto(`https://uonline.newcastle.edu.au${$(elem).attr('href')}`).then(async () => {

                    const content = await child_page.content();
                    child_page.close();

                    setTimeout(() => {
                        crawl_folder_pages(cheerio.load(content), browser, new_address); // Recursion for a folder on a folder page.
                    }, 5000*(i+1));
                })
            }))
        }
    });
}