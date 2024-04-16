// DEPENDENCIES
const app = require("./app.js");
const socketIo = require("socket.io");
const http = require("http");


const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // Adjust according to your frontend host
    methods: ["GET", "POST"],
  },
}); 

const authController = require("./controllers/authController");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 3003;
console.log("calling auth server");

// the server.js file is an extension of the app.js file.
// So, we can use the app.use() method to add the authController to the server
// the same as in app.js. However we need to use it here in order to pass the 'io'
// server to the authController for register and login where we will call scheduleReminders(io)
app.use("/api/auth", authController(io));

// LISTEN
app.listen(PORT, () => {
  console.log(`💻 Listening on port ${PORT} 🔖`);
});
