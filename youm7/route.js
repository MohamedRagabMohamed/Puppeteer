const { trending } = require("./controller");

function scraperRoute(app) {
  app.get("/youm7", trending);
}

module.exports = { scraperRoute };
