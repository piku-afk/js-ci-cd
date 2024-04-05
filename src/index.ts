import puppeteer, { type PuppeteerLaunchOptions } from "puppeteer";

const puppeteerConfig: PuppeteerLaunchOptions = {
  headless: "shell",
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-accelerated-2d-canvas",
    "--no-first-run",
    "--no-zygote",
    "--disable-gpu",
  ],
};

const browser = await puppeteer.launch(puppeteerConfig);
const page = await browser.newPage();

await page.goto("https://www.freecodecamp.org/news/");


const textSelector = await page.waitForSelector("h2.post-card-title > a");
const fullTitle = await textSelector?.evaluate((el) => el.textContent);

console.log('The title of the first blog post is "%s".', fullTitle?.trim());

await browser.close();
