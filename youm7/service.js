const puppeteer = require("puppeteer");
const { openPage } = require("../help/helper");

async function youm7Service(url) {
  let arrData = [];
  let index = 1;
  let element = "";

  const [err, page, browser] = await openPage(url);

  if (err !== null) {
    return [err, arrData];
  }

  const button = await page.$(
    "body > main > div.row.bodyCC > div > div.row.news-content > aside > div.container.most-read > ul > li:nth-child(2)"
  );

  if (button === null) {
    return [new Error("INVALID selector"), arrData];
  }

  await button.click();

  await page.waitForSelector(
    "body > main > div.row.bodyCC > div > div.row.news-content > aside > div.container.most-read > div > div.most-commented.tab-pane.fade.active.in > h3:nth-child(1)"
  );

  while (element != null) {
    let selector = `body > main > div.row.bodyCC > div > div.row.news-content > aside > div.container.most-read > div > div.most-commented.tab-pane.fade.active.in > h3:nth-child(${index})`;

    element = await page.$(selector);

    if (element === null) {
      break;
    }

    element = await page.evaluate((el) => el.textContent, element);
    arrData.push(element);

    index++;
  }

  await page.close();
  await browser.close();

  return [null, arrData];
}

module.exports = { youm7Service };
