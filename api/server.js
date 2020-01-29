const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.get("/", (req,res) => {
    res.send("It's running!");
});

module.exports = server;