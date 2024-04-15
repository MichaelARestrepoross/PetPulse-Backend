// const schedule =require("node-schdule");
// const { findReminder } = require("../queries/reminders")


// // function to emit reminders to users 

// const emitReminders = async (io, id)=>{
//   const allReminders = await findReminder(1);
//   console.log("allReminders", allReminders)

//   io.emit("remindersDue", allReminders)
// };

// const schduleReminders = (io,id) => {
//   console.log("ran SchduleReminders");
//   schedule.schduleJob("*/1 * * * *", () => emitReminders(io,id));
// };

// module.exports = {schduleReminders};