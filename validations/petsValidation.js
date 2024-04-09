
// Function to validate pet data
const validatePet = (req, res, next) => {
    const { user_id, name, species } = req.body;
  
    // Check if required fields are present
    if (!user_id || !name || !species) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    next();
  };
  
  module.exports = { validatePet };
  