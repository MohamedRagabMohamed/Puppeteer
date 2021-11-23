const puppeteer = require("puppeteer");

async function openPage(url) {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });

    return [null, page, browser];
  } catch (err) {
    return [new Error("INVALID " + url), page, browser];
  }
}
module.exports = { openPage };
