const mongoose = require('mongoose');

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        await mongoose.connect("mongodb+srv://venitiwari:Veni@123@cluster0.qkegk49.mongodb.net/", connectionParams);
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
}
