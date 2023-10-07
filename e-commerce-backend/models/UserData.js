const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    FirstName:{
        type:String,
    },
    LastName:{
        type:String,
    },
    email:{
        type:String,
    },
    Password:{
        type:String,
    },
    ConfirmPassword:{
        type:String,
    },
    image:{
        type:String,
    }
})
module.exports=mongoose.model("Data",UserSchema);