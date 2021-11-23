const { websiteService } = require("./service");

async function website(req, res) {
  const url = req.body.url || "";
  const selector = req.body.selector || "";
  const type = req.body.type || "";

  [err, dataScrapped] = await websiteService(url, selector, type);

  if (err !== null) {
    res.status(400).send({
      data: "",
      message: "There is an error",
      error: err.message,
    });
    return;
  }

  res.send({
    data: dataScrapped,
    message: "This data i found",
    error: null,
  });
}

module.exports = { website };
