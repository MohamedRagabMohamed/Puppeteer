const { scrapeService } = require("./service");

async function scrape(req, res) {
  url = req.body.url;
  //selector = req.body.selector;
  try {
    dataScrapped = await scrapeService(url);
    res.send({
      data: dataScrapped,
      message: "This data i found",
      error: null,
    });
  } catch (err) {
    res.send({
      data: "",
      message: "There is an error",
      error: err.message,
    });
    return;
  }
}

module.exports = { scrape };
