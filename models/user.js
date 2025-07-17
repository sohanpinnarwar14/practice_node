
const mongoose = require('mongoose');


// This is user schema  created using mongoose.schema  
// it's basically blueprint

const userschema = new mongoose.Schema({
    firstName:{
        type :String
    },
    lastName: {
        type :String
    },
    emailId :{
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
});


// now create a user model 

const User = mongoose.model("user", userschema);

module.exports = User;
/// we can also write 
// module.exports = mongoose.model("User", userschema);