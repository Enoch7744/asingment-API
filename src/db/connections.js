require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

async function connection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected");
    } catch (error) {
        console.log(error);
    };
};

connection();