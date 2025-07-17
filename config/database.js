const mongoose = require("mongoose");


const connectDB = async () => {
    await mongoose.connect(
    "mongodb+srv://pinnarwarsohan:sohan123@cluster0.ievppq8.mongodb.net/cluster0"
);
};

module.exports = connectDB;
// connectDB()
 
// connectDB().then(() => {
//     console.log("database connection established....");
// })
// .catch(err =>{
//     console.log("database can not be connected");
// });
