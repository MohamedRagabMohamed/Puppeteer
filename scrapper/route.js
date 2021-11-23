const { scrape } = require("./controller");

function scraperRoute(app) {
  app.post("/scrape", scrape);
}

module.exports = { scraperRoute };
