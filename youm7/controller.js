const { youm7Service } = require("./service");
const { url } = require("./constant");

async function trending(req, res) {
  const [err, dataScrapped] = await youm7Service(url);

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

module.exports = { trending };
