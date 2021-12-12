import cheerio from 'cheerio';
import crawl_attachments from './attachments_pages_crawler.js';
import crawl_folder_pages from './folder_pages_crawler.js';

export default async function router(env_obj){
    const $ = cheerio.load(await env_obj.main_page.content());

    // if($('.attachments li a').length != 0){
    //     // Route to attachments_pages_crawler
    //     crawl_attachments($, env_obj.browser);
    // }
    // else if($('.vtbegenerated_div a').length != 0){
    //     // Route to different_attachments_crawler
    //     // Feature to be added in future updates
    // }
    // else if($('h3 a').length != 0){
    //     // Route to folder_pages_crawler
    //     crawl_folder_pages($, env_obj.browser);
    // }

    crawl_folder_pages($, env_obj.browser);
}