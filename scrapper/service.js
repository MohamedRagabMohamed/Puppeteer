const puppeteer = require("puppeteer");

async function scrapeService(url) {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });
  } catch (err) {
    throw new Error("INVALID " + url);
  }
  let arrData = [];
  let index = 1;
  let element = "";
  while (element != null) {
    let selector = `body > header > div.row.marigin0.headerNewNew > div > nav > div > ul > li:nth-child(${index})`;
    element = await page.$(selector);
    if (element === null) {
      break;
    }
    element = await page.evaluate((el) => el.textContent, element);
    arrData.push(element);
    index++;
  }
  /*element = await page.evaluate((el) => el.textContent, element);
  body > main > div.row.bodyCC > div > div.row.news-content > div > div > div:nth-child(15) > div:nth-child(2) > h3 > a
  body > main > div.row.bodyCC > div > div.row.news-content > div > div > div:nth-child(15) > div:nth-child(3) > h3 > a
  console.log(element);*/
  await browser.close();
  return arrData;
}

module.exports = { scrapeService };
