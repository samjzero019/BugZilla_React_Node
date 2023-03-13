const express = require("express");
const parser = require("body-parser");

const router = require("./router/router");
const { default: mongoose } = require("mongoose");

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

mongoose
  .connect(
    "mongodb+srv://admin:iJb8S64fMy59R8rO@bugzilla.0xf2sws.mongodb.net/bugzilla?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("Connection Established!!!");
    // return res;
  })
  .then(() => {
    server.listen(8080);
    console.log("Backend Server is listening on http://www.localhost:8080");
  })
  .catch((err) =>
    console.log("Error during Connection attempt to DB ", err.message)
  );
