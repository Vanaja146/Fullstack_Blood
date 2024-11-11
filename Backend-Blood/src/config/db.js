
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI,{ dbName: "bloodBanks-online"}).then(()=>{
            console.log("connected to database");
            
        }) 
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
