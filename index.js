const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://traversymedia.com");

  //   await page.screenshot({ path: "example.png", fullPage: true });
  //   const html = await page.content();
  //   console.log(html);
  const title = await page.evaluate(() => document.title);
  console.log(title);
  //  Get all links
  //   const links = await page.evaluate(() =>
  //     Array.from(document.querySelectorAll("a"), (e) => e.href)
  //   );
  //   console.log(links);

  const courses = await page.$$eval("#courses .card", (elements) =>
    elements.map((e) => ({
      title: e.querySelector(".card-body h3").innerText,
      level: e.querySelector(".card-body .level").innerText,
      url: e.querySelector(".card-footer a").href,
      promo: e.querySelector(".card-footer .promo-code .promo").innerText,
    }))
  );

  console.log(courses);

  await browser.close();
}

run();
