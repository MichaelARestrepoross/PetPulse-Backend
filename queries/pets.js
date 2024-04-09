const db = require('../db/dbConfig');

const getAllPets = async () => {
  try {
    const allPets = await db.any('SELECT * FROM pets');
    return allPets;
  } catch (error) {
    return error;
  }
};

const getPetById = async (id) => {
  try {
    const onePet = await db.one('SELECT * FROM pets WHERE id=$1', id);
    return onePet;
  } catch (error) {
    return error;
  }
};

const createPet = async (pet) => {
  const { user_id, name, species } = pet;
  try {
    const newPet = await db.one(
      'INSERT INTO pets (user_id, name, species) VALUES($1, $2, $3) RETURNING *',
      [user_id, name, species]
    );
    return newPet;
  } catch (error) {
    return error;
  }
};

const deletePetById = async (id) => {
  try {
    const deletedPet = await db.one(
      'DELETE FROM pets WHERE id = $1 RETURNING *',
      id
    );
    return deletedPet;
  } catch (error) {
    return error;
  }
};

const updatePetById = async (id, pet) => {
  const { user_id, name, species } = pet;
  try {
    const updatedPet = await db.one(
      'UPDATE pets SET user_id =$1, name=$2, species=$3 WHERE id=$4 RETURNING *',
      [user_id, name, species, id]
    );
    return updatedPet;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  deletePetById,
  updatePetById
};
