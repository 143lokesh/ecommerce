const mongoose=require('mongoose');
require("dotenv").config();
const connectDb = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("connected with dB");
    })
    .catch((err)=>{
        console.error(err);
        console.log(err);
        process.exit(1);
    })
}
module.exports=connectDb