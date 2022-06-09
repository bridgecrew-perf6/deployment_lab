const express = require("express");
const path = require("path");

const app = express();

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "0ddd48d5ebce470782ab84aef141cd2b",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

app.use(express.static("public"));
// app.use("/js", express.static(path.join(__dirname, "public/main.js")));

app.get("/", (req, res) => {
  rollbar.log("Hello world!");
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // '/' general file path

// app.get("/js", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/main.js"));
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on ${port}`));
