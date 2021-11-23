require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

require("./scrapper/route").scraperRoute(app);
require("./youm7/route").scraperRoute(app);
require("./website/route").scraperRoute(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
