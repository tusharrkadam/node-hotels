const mongoose = require("mongoose");

//define a mongodb connection url

const mongoURL = "mongodb://localhost:27017/hotels";

// set up mongodb connection url

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

// Define event listeners for database connection
db.on("connected", () => {
    console.log(" Connected to   MongoDB server");
});

db.on("error", (err) => {
    console.error(" MongoDB connection error:", err);
});

db.on("disconnected", () => {
    console.log(" MongoDB disconnected");
});

// Export the db connection
module.exports = db;