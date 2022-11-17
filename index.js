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
  //  Get all links
  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a"), (e) => e.href)
  );
  console.log(links);

  await browser.close();
}

run();
