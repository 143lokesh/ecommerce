
const Data=require('../models/UserData');

exports.Login=async(req,res)=>{
    console.log(req.body);
    try{
           const {email,Password}=req.body;
            const findUser=await Data.findOne({email});
            if(findUser &&  findUser.Password===Password){
                res.status(200).json({
                    success:true,
                    data:findUser,
                    message:"logged In Successfully",
                })
            }
            else{
                res.status(400).json({
                    success:false,
                  
                    message:"password Incorrect",
                })
            }
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"email doesnt exist please sign up"
        })
    }
}