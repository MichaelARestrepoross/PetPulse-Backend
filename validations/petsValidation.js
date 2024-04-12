
// Function to validate pet data
const validatePet = (req, res, next) => {
    const { user_id, name, species } = req.body;
  
    // Check if required fields are present
    if (!user_id) {
      return res.status(400).json({ error: "Missing required fields: user_id" });
    }
    if (!name) {
      return res.status(400).json({ error: "Missing required fields: name" });
    }
    if (!species) {
      return res.status(400).json({ error: "Missing required fields: species" });
    }
    
    next();
  };
  
  module.exports = { validatePet };
  