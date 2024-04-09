const express = require("express");
const pets = express.Router();

//qeury imports
const {
  getAllPets,
  getPetById,
  createPet,
  deletePetById,
  updatePetById
} = require("../queries/pets");

const {getAllReminders} = require("../queries/reminders")

//validations
const { validatePet } = require("../validations/petsValidation");

pets.get("/", async (req, res) => {
  try {
      const allPets = await getAllPets();
      res.status(200).json(allPets);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

pets.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const pet = await getPetById(id);
      const allReminders = await getAllReminders();
      const filterdReminders = allReminders.filter((reminder)=> pet.id === reminder.pet_id)
    if (pet) {
      res.status(200).json({...pet, filterdReminders});
    } else {
      res.status(404).json({ error: "Pet not found with this ID" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

pets.post("/", validatePet, async (req, res) => {
  try {
    const newPet = await createPet(req.body);
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

pets.put("/:id", validatePet, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPet = await updatePetById(id, req.body);
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

pets.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPet = await deletePetById(id);
    res.status(200).json(deletedPet);
  } catch (error) {
    res.status(404).json({ error: "Pet not found with this ID" });
  }
});

module.exports = pets;
