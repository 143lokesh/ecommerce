const Product=require('../models/productData');

exports.addproducts = async (req,res)=>{
    console.log(req.body);
    try{
        const {name,tag,image,price,description}=req.body;
     const findProduct= await Product.findOne({name:name});
     if(findProduct){
        return res.status(400).json({
            success:false,
            message:"Product Already Exist's",
        })
     }
    const prod=await Product.create({
        name,
        tag,
        image,
        price,
        description
    });
    res.status(200).json({
        success:true,
        data:prod,
        message:'product added successfully',
    })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"unable to add product",
        })
    }
    


}