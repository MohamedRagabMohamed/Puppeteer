async function typeCheck(type, element, page) {
  let data = "";
  switch (type) {
    case "text":
      data = await page.evaluate((el) => el.textContent, element);
      break;
    case "link":
      data = await page.evaluate((el) => el.getAttribute("href"), element);
      break;
    case "image":
      data = await page.evaluate((el) => el.getAttribute("src"), element);
      break;
  }
  return data;
}
module.exports = { typeCheck };
