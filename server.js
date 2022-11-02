const express = require("express");
const { resolve } = require("path");
const app = express();

app.use("/", express.static(resolve(__dirname, "./build")));
app.use("*", express.static(resolve(__dirname, "./build")));

const port = process.env.PORT || 5000;

app.listen(port);

console.log("server started " + port);
