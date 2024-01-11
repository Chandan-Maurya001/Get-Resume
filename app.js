require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");
const createError = require("http-errors");
const path = require("path");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const logger = require("morgan");
const bodyParser = require("body-parser");
const ErrorHandler = require("./helper/ErrorHandler");
const sequelize = require("./config/db");
const passport = require("passport");
require("./config/passport")(passport);


const app = express();

app.use(logger("dev"));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "100mb",
    parameterLimit: 50000,
  })
);

// view engine setup
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.use(
  session({
    secret: "getResuse",
    name: "__getresuem",
    store: new SequelizeStore({
      db: sequelize,
      checkExpirationInterval: 15 * 60 * 1000,
      expiration: 24 * 60 * 60 * 1000,
    }),
    saveUninitialized: false,
    resave:false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "PROD" ? true : false,
      proxy: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    },
  })
);

    
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')()(passport);
// routes
const { userRoute, appRoute } = require("./routes");
app.use("/", appRoute);
app.use("/user", userRoute);

// catch 404 and forward to error handler
app.get("*", (req, res, next) => {
  next(new ErrorHandler(404, "Page not found"));
});

// Globle error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || err.statusCode || 500);
  res.render("error");
});


// connecting to db
sequelize
  .sync({ logging: true, force:false}) // set force true if any table updated!
  .then(() => console.log("Connected to database"))
  .catch((error) => {
    throw error;
  });

module.exports = app;
