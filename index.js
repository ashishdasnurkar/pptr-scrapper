const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://ashishdasnurkar.com");

  //   await page.screenshot({ path: "example.png", fullPage: true });
  //   const html = await page.content();
  //   console.log(html);
  const title = await page.evaluate(() => document.title);
  console.log(title);
  await browser.close();
}

run();
