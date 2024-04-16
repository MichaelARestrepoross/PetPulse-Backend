const db = require('../db/dbConfig');

const findReminders = async (id) => {
  console.log("id", id);
  try {
    const reminders = await db.any(
      "SELECT * FROM reminders WHERE user_id = $1 AND reminder_time BETWEEN NOW() AND (NOW() + INTERVAL '2 minutes')",
      [id]
    );  
    return reminders;
  } catch (error) {
    throw error;
  }
};
  


// Retrieve all reminders.
const getAllReminders = async () => {
    try {
      const reminders = await db.any(`
      SELECT 
        r.*, 
        p.name AS pet_name 
      FROM 
        reminders r
      JOIN 
        pets p ON r.pet_id = p.id
      WHERE 
        r.reminder_time >= NOW()
      ORDER BY 
        r.reminder_time ASC;
      `);
      return reminders;
    } catch (error) {
      console.error("Error fetching all reminders:", error);
      throw error;
    }
  };
  


//Retrieve a reminder by its ID.
const getReminderById = async (id) => {
  try {
    const reminder = await db.oneOrNone("SELECT * FROM reminders WHERE id = $1", id);
    return reminder;
  } catch (error) {
    console.error(`Error fetching reminder with ID ${id}:`, error);
    throw error;
  }
};


 //Create a new reminder.
const createReminder = async (reminder) => {
  const { pet_id, reminder_type, reminder_message, reminder_time } = reminder;
  try {
    const newReminder = await db.one(
      "INSERT INTO reminders (pet_id, reminder_type, reminder_message, reminder_time) VALUES ($1, $2, $3, $4) RETURNING *",
      [pet_id, reminder_type, reminder_message, reminder_time]
    );
    return newReminder;
  } catch (error) {
    console.error("Error creating new reminder:", error);
    throw error;
  }
};


 //Delete a reminder by its ID.

const deleteReminderById = async (id) => {
  try {
    const deletedReminder = await db.one(
      "DELETE FROM reminders WHERE id = $1 RETURNING *",
      id
    );
    return deletedReminder;
  } catch (error) {
    console.error(`Error deleting reminder with ID ${id}:`, error);
    throw error;
  }
};

//Update a reminder by its ID.
const updateReminderById = async (id, reminder) => {
  const { pet_id, reminder_type, reminder_message, reminder_time } = reminder;
  try {
    const updatedReminder = await db.one(
      "UPDATE reminders SET pet_id = $1, reminder_type = $2, reminder_message = $3, reminder_time = $4 WHERE id = $5 RETURNING *",
      [pet_id, reminder_type, reminder_message, reminder_time, id]
    );
    return updatedReminder;
  } catch (error) {
    console.error(`Error updating reminder with ID ${id}:`, error);
    throw error;
  }
};

module.exports = {
  findReminders,
  getAllReminders,
  getReminderById,
  createReminder,
  deleteReminderById,
  updateReminderById,
};
