const express = require("express");
const parser = require("body-parser");
const session = require("express-session");
const mongoDBStore = require("connect-mongodb-session")(session);

const authRoutes = require("./src/router/auth");
const userRoutes = require("./src/router/user");
const bugRoutes = require("./src/router/bug");
const errorController = require("./src/controllers/error");

const { default: mongoose } = require("mongoose");
const server = express();

const DB_URI =
  "mongodb+srv://admin:iJb8S64fMy59R8rO@bugzilla.0xf2sws.mongodb.net/bugzilla";

// router.use(parser.urlencoded({ extended: false })) // parse the request for data of x-www-urlencoded type which comes from form etc
server.use(parser.json()); // for  request data which has json base data
const store = mongoDBStore({ uri: DB_URI, collection: "sessions" });

// initialize Session with db persistance
server.use(
  session({
    secret: "BugZilla",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

/** Set Headers  */
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

server.use("/api/v1", authRoutes);
server.use("/api/v1", userRoutes);
server.use("/api/v1", bugRoutes);

// Common Routes
// in case api route is not registered!
server.use("/*", errorController.error404);

mongoose
  .connect(DB_URI)
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
