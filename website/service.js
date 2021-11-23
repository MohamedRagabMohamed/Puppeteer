const puppeteer = require("puppeteer");
const { openPage } = require("../help/helper");
const { typeCheck } = require("./helper");

async function websiteService(url, selector, scrapeType) {
  let data = "";

  const [err, page, browser] = await openPage(url);

  if (err !== null) {
    return [err, data];
  }

  const selectorIsExist = await page.$(selector);

  if (selectorIsExist === null) {
    return [new Error("INVALID selector"), data];
  }

  data = await typeCheck(scrapeType.toLowerCase(), selectorIsExist, page);

  if (data === "" || data === null) {
    return [new Error("INVALID type"), data];
  }

  await page.close();
  await browser.close();

  return [null, data];
}

module.exports = { websiteService };
