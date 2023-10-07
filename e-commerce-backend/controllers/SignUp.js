

const Data=require('../models/UserData');

exports.signUp =async(req,res)=>{
     console.log(req.body);
    try{
    const {FirstName,LastName,email,Password,ConfirmPassword,image}=req.body;
    const FindUser = await Data.findOne({email});
    if(FindUser){
        res.status(400).json({
            success:false,
            message:"user already exists ",
        })
    }
    else{
        const response= await Data.create({
            FirstName,
            LastName,
            email,
            Password,
            ConfirmPassword,
            image,
        })
        res.status(200).json({
            success:true,
            data:response,
            message:"user Successfully signed up"
        })
    }
    
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"cant sign Up"
        })
    }
    
     
}