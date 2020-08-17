const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

porto = process.env.PORT || 5000;

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var sendmailRouter = require("./routes/sendmail");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());

app.use("/", indexRouter);
app.use("/sendmail", sendmailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(porto, () =>
  console.log(`Backend of PORTFOLIO is running on ${porto}`)
);

module.exports = app;
