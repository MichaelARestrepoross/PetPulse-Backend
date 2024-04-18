const schedule = require("node-schedule");
const { findReminders } = require("../queries/reminders");
// const fetch = require("node-fetch");

// Function to emit reminders to users

const emitReminders = async (io, userId) => {
  //This makes a query to get all of the reminders for the user
  console.log("userid", userId);
  const allReminders = await findReminders(userId);
  // console.log("allReminders", allReminders);
  //This emits aka sends the reminders to the user
  if(allReminders.length>0){
    io.emit("remindersDue", allReminders);
  }
};

// this schedules the emitReminders function to run every 15 seconds
// https://www.npmjs.com/package/node-schedule reference this link to understand the syntax for .scheduleJob
const scheduleReminders = async (io, userId) => {
  // sets a schedule see if theres anthing
  schedule.scheduleJob("*/15 * * * * *", async () => {
    const allReminders = await findReminders(userId);
    if (allReminders.length > 0) {
      console.log("ran scheduleReminders");
      emitReminders(io, userId);
    }
  });
};

module.exports = { scheduleReminders };