

const Product =require('../models/productData');

exports.allProducts =async(req,res)=>{

    try{
        const data = await Product.find({})
        res.send(JSON.stringify(data));
    }
    catch(err){
        res.json({
            message:"cant fetch products",
        })
    }
}