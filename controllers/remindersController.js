const express = require("express");
const reminders = express.Router();

const {
  getAllReminders,
  getReminderById,
  createReminder,
  deleteReminderById,
  updateReminderById,
} = require("../queries/reminders");

// Get all reminders
reminders.get("/", async (req, res) => {
  try {
    const allReminders = await getAllReminders();
    res.status(200).json(allReminders);
  } catch (error) {
    console.error("Error getting all reminders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a reminder by ID
reminders.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reminder = await getReminderById(id);
    if (reminder) {
      res.status(200).json(reminder);
    } else {
      res.status(404).json({ error: "Reminder not found with this ID" });
    }
  } catch (error) {
    console.error(`Error getting reminder with ID ${id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new reminder
reminders.post("/", async (req, res) => {
  const reminderData = req.body;
  try {
    const newReminder = await createReminder(reminderData);
    res.status(201).json(newReminder);
  } catch (error) {
    console.error("Error creating new reminder:", error);
    res.status(400).json({ error: "Failed to create new reminder" });
  }
});

// Update a reminder by ID
reminders.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReminderData = req.body;
  try {
    const updatedReminder = await updateReminderById(id, updatedReminderData);
    res.status(200).json(updatedReminder);
  } catch (error) {
    console.error(`Error updating reminder with ID ${id}:`, error);
    res.status(400).json({ error: "Failed to update reminder" });
  }
});

// Delete a reminder by ID
reminders.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReminder = await deleteReminderById(id);
    res.status(200).json(deletedReminder);
  } catch (error) {
    console.error(`Error deleting reminder with ID ${id}:`, error);
    res.status(400).json({ error: "Failed to delete reminder" });
  }
});

module.exports = reminders;
