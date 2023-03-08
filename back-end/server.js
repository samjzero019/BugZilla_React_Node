const express = require("express");
const parser = require("body-parser");

const router = require("./router/router");

const server = express();

// router.use(parser.urlencoded({ extended: false })) // parse the request for data of x-www-urlencoded type which comes from form etc
server.use(parser.json()); // for  request data which has json base data

/** Set Headers  */
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

server.use("/api/v1", router);

server.listen(8080);
