const { website } = require("./controller");

function scraperRoute(app) {
  app.post("/website", website);
}

module.exports = { scraperRoute };
