require("dotenv").config();

const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { cors_urls } = require("./src/constants/app_config");

// ROUTES FILE
const authRoutes = require("./src/routes/auth");
const employeeRoutes = require("./src/routes/employee");
const leavesRoutes = require("./src/routes/leaves");

const app = express();

// Connect to MongoDB
mongoose
  .connect(`${process.env.CONNECTION_STRING}${process.env.DATABASE_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static(`${__dirname}/static`));

const corsOptions = {
  origin: cors_urls,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/api", [authRoutes, employeeRoutes, leavesRoutes]);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log("sever is running", req.headers.host);
  next(createError(404));
});

module.exports = app;
