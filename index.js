const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://ashishdasnurkar.com");

  //   await page.screenshot({ path: "example.png", fullPage: true });
  const html = await page.content();
  console.log(html);

  await browser.close();
}

run();
