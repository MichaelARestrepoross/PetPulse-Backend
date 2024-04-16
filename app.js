// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const cron = require("node-cron");
const cookieParser = require("cookie-parser");
const { findAllReminders } = require("./queries/reminders");

const checkController = require("./controllers/checkController");

const petsController = require("./controllers/petsController");
const remindersController= require("./controllers/remindersController");

// CONFIGURATION
const app = express();

// cron job to attempt to prevent render from sleeping
// cron.schedule("*/5 * * * *", () => {
//   const currentTime = new Date().toLocaleString("en-US", {
//     timeZone: "America/New_York",
//   });
//   console.log(`Running a task every 5 minutes. Current time: ${currentTime}`);
// });

// MIDDLEWARE change origin to your frontend netlify address for deployment
app.use(
  cors({
    origin: "http://localhost:3000",
    // origin: "https://main--jwt-auth-10-3.netlify.app/",
  })
);
app.use(express.json());
app.use(cookieParser());

console.log("app in app.js");
app.use("/api/check", checkController);

app.use("/api/pets", petsController);
app.use("/api/reminders", remindersController);

// ROUTES
app.get("/", (_req, res) => {
  res.send("Welcome to PetPulse Auth!");
});

// 404 PAGE
app.get("*", (_req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
