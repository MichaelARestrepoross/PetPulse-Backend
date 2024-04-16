const schedule = require("node-schedule");
const { findReminders } = require("../queries/reminders");
// const fetch = require("node-fetch");

// Function to emit reminders to users

const emitReminders = async (io, userId) => {
  //This makes a query to get all of the reminders for the user
  console.log("userid", userId);
  const allReminders = await findReminders(userId);
  console.log("allReminders", allReminders);
  //This emits aka sends the reminders to the user
  io.emit("remindersDue", allReminders);
};

// this schedules the emitReminders function to run every minute
// https://www.npmjs.com/package/node-schedule reference this link to understand the syntax for .scheduleJob
const scheduleReminders = (io, userId) => {
  console.log("ran scheduleReminders");
  schedule.scheduleJob("*/1 * * * *", () => emitReminders(io, userId));
};

module.exports = { scheduleReminders };